import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    comment: '식별번호 (UUID)',
  })
  id: string;

  @CreateDateColumn({
    nullable: true,
    name: 'register_dtm',
    comment: '등록 일시',
  })
  registerDtm: Date;

  @Column({
    nullable: true,
    name: 'register_user',
    comment: '등록자',
  })
  registerUser: string;

  @UpdateDateColumn({
    nullable: true,
    name: 'update_dtm',
    comment: '수정 일시',
  })
  updateDtm: Date;

  @Column({
    nullable: true,
    name: 'update_user',
    comment: '수정자',
  })
  updateUser: string;
}
