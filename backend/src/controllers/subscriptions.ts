import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CRUD } from './crud';
import { SubscriptionEntity } from 'src/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller("/api/subscription")
export class HouseholdSettingsController extends CRUD<SubscriptionEntity> {

	constructor(
		@InjectRepository(SubscriptionEntity)
		repository: Repository<SubscriptionEntity>) {
		super(repository);
	}

	@Get()
	onList(): Promise<SubscriptionEntity[]> {
		return this.list();
	}

	@Post()
	onCreate(@Body() household: SubscriptionEntity): Promise<SubscriptionEntity[]> {
		return this.create(household);
	}

	@Put("/:id")
	onUpdate(@Param('id') id: string, @Body() household: SubscriptionEntity): Promise<SubscriptionEntity[]> {
		return this.update(household);
	}

	@Delete("/:id")
	delete(@Param() id: string): Promise<SubscriptionEntity[]> {
		return this.delete(id);
	}
}