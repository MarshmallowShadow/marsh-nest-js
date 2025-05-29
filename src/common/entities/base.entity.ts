import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  registerDtm: Date;

  @Column()
  registerUser: string;

  @UpdateDateColumn()
  updateDtm: Date;

  @Column()
  updateUser: string;
}
