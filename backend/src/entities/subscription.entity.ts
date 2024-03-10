import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SubscriptionEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: string;


  @Column()
  enabled: boolean;

  @Column()
  name: string;

  @Column()
  logo: string;

  @Column()
  price: number;

  @Column()
  currency: string;

  @Column()
  mode: "manual" | "automatic";

  @Column()
  daysToComplete: number;

  @Column()
  completed: boolean;


  //region Joins
  @Column()
  householdId: string;

  @Column()
  paymentMethodId: string;

  @Column()
  categoryId: string;
  // endregion


  //region Cycle
  @Column()
  cycle: "yearly" | "monthly";

  @Column()
  frequency: number;

  @Column()
  nextPayment: number;
  // endregion


  // region Notification
  @Column()
  enableNotification: boolean;

  @Column()
  notifyDaysBefore: number;
  // endregion
}