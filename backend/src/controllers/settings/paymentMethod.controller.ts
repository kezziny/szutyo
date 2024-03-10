import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from '../../app.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HouseholdEntity, PaymentMethodEntity } from '../../entities';
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

@Controller("/api/settings/paymentMethod")
export class PaymentMethodSettingsController extends CRUD<PaymentMethodEntity> {

	constructor(
		@InjectRepository(PaymentMethodEntity)
		repository: Repository<PaymentMethodEntity>) {
		super(repository);
	}

	@Get()
	onList(): Promise<PaymentMethodEntity[]> {
		return this.list();
	}

	@Post()
	onCreate(@Body() household: Insert): Promise<PaymentMethodEntity[]> {
		return this.create(household);
	}

	@Put("/:id")
	onUpdate(@Param() id: string, @Body() household: Update): Promise<PaymentMethodEntity[]> {
		return this.update(household);
	}

	@Delete("/:id")
	delete(@Param() id: string): Promise<PaymentMethodEntity[]> {
		return this.delete(id);
	}
}