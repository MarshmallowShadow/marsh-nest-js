import { BaseEntity } from 'src/common/entities/base.entity';
import { YN } from 'src/common/entities/types';
import { Column, Entity } from 'typeorm';

@Entity('t_user')
export class User extends BaseEntity {
  @Column()
  profilePictureId: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  deleted: YN;
}
