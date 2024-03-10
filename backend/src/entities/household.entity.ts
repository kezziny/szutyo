import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HouseholdEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  icon: string;

  @Column()
  color: string;
}