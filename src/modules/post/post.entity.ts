import { BaseEntity } from 'src/common/entities/base.entity';
import { YN } from 'src/common/entities/types';
import { Column, Entity } from 'typeorm';

@Entity('t_post')
export class Post extends BaseEntity {
  @Column({
    nullable: true,
    name: 'user_id',
    comment: '작성자 ID',
  })
  userId: string;

  @Column({
    nullable: true,
    name: 'title',
    comment: '제목',
  })
  title: string;

  @Column({
    nullable: true,
    name: 'content',
    comment: '내용',
  })
  content: string;

  @Column({
    nullable: true,
    name: 'deleted',
    comment: '삭제 여부',
  })
  deleted: YN;
}
