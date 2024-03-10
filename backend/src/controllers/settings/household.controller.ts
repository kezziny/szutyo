import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from '../../app.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HouseholdEntity } from '../../entities';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUrl } from 'class-validator';
import { CRUD } from '../crud';

class Insert {
	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsString()
	email: string;

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

@Controller("/api/settings/household")
export class HouseholdSettingsController extends CRUD<HouseholdEntity> {

	constructor(
		@InjectRepository(HouseholdEntity)
		repository: Repository<HouseholdEntity>) {
		super(repository);
	}

	@Get()
	onList(): Promise<HouseholdEntity[]> {
		return this.list();
	}

	@Post()
	onCreate(@Body() household: Insert): Promise<HouseholdEntity[]> {
		return this.create(household);
	}

	@Put("/:id")
	onUpdate(@Param('id') id: string, @Body() household: Update): Promise<HouseholdEntity[]> {
		return this.update(household);
	}

	@Delete("/:id")
	delete(@Param() id: string): Promise<HouseholdEntity[]> {
		return this.delete(id);
	}
}