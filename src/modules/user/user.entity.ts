import { BaseEntity } from 'src/common/entities/base.entity';
import { YN } from 'src/common/entities/types';
import { Column, Entity } from 'typeorm';

@Entity('t_user')
export class User extends BaseEntity {
  @Column({
    nullable: true,
    name: 'profile_picture_id',
    comment: '프로필 사진 첨부파일 ID',
  })
  profilePictureId: string;

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
    name: 'deleted',
    comment: '삭제 여부',
  })
  deleted: YN;
}
