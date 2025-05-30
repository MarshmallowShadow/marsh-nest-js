import { BaseEntity } from 'src/common/entities/base.entity';
import { YN } from 'src/common/entities/types';
import { Column, Entity } from 'typeorm';

@Entity('t_post')
export class Post extends BaseEntity {
  @Column()
  userId: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  deleted: YN;
}
