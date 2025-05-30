import { AdminRole, YN } from 'src/common/entities/types';
import { Column, Entity } from 'typeorm';

@Entity('t_admin')
export class Admin {
  @Column({
    nullable: true,
    name: 'username',
    comment: '사용자 이름',
  })
  username: string;

  @Column({
    nullable: true,
    name: 'email',
    comment: '이메일',
  })
  email: string;

  @Column({
    nullable: true,
    name: 'password',
    comment: '비밀번호',
  })
  password: string;

  @Column({
    nullable: true,
    name: 'role',
    comment: '권한',
  })
  role: AdminRole;

  @Column({
    nullable: true,
    name: 'deleted',
    comment: '삭제 여부',
  })
  deleted: YN;
}
