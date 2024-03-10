import { Repository } from 'typeorm';

export class CRUD<T extends { id?: string }> {

	constructor(
		protected readonly repository: Repository<T>) {
	}

	list(): Promise<T[]> {
		return this.repository.find();
	}

	create(entity: T): Promise<T[]> {
		return this.repository.save(entity)
			.then(() => this.repository.find());
	}

	update(entity: T): Promise<T[]> {
		console.log("update: ", entity);
		return this.repository.save(entity).then(() => this.repository.find());
	}

	delete(id: string): Promise<T[]> {
		return this.repository.delete(id).then(() => this.repository.find());
	}
}