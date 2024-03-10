import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from '../../app.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity, HouseholdEntity } from '../../entities';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUrl } from 'class-validator';
import { CRUD } from '../crud';

class Insert {
	@IsNotEmpty()
	@IsString()
	name: string;

	@IsString()
	icon: string;

	@IsNotEmpty()
	@IsString()
	color: string;
}

class Update extends Insert {
	@IsNotEmpty()
	@IsString()
	id: string;
}

@Controller("/api/settings/category")
export class CategorySettingsController extends CRUD<CategoryEntity> {

	constructor(
		@InjectRepository(CategoryEntity)
		repository: Repository<CategoryEntity>) {
		super(repository);
	}

	@Get()
	onList(): Promise<CategoryEntity[]> {
		return this.list();
	}

	@Post()
	onCreate(@Body() household: Insert): Promise<CategoryEntity[]> {
		return this.create(household);
	}

	@Put("/:id")
	onUpdate(@Param() id: string, @Body() household: Update): Promise<CategoryEntity[]> {
		household.id = id;
		return this.update(household);
	}

	@Delete("/:id")
	delete(@Param() id: string): Promise<CategoryEntity[]> {
		return this.delete(id);
	}
}