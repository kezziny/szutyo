import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity, HouseholdEntity, PaymentMethodEntity, SubscriptionEntity } from './entities';
import { HouseholdSettingsController } from './controllers/settings/household.controller';
import { CategorySettingsController } from './controllers/settings/category.controller';
import { PaymentMethodSettingsController } from './controllers/settings/paymentMethod.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [HouseholdEntity, PaymentMethodEntity, SubscriptionEntity, CategoryEntity],
      synchronize: true,
      autoLoadEntities: true
    }),
    TypeOrmModule.forFeature([HouseholdEntity, PaymentMethodEntity, SubscriptionEntity, CategoryEntity])
  ],
  controllers: [HouseholdSettingsController, CategorySettingsController, PaymentMethodSettingsController],
  providers: [AppService],
})
export class AppModule {}
