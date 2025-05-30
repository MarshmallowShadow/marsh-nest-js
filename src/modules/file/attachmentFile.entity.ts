import { BaseEntity } from 'src/common/entities/base.entity';
import { YN } from 'src/common/entities/types';
import { Column, Entity } from 'typeorm';

@Entity('t_attachment_file')
export class AttachmentFile extends BaseEntity {
  @Column({
    nullable: true,
    name: 'stored_path',
    comment: '저장 경로',
  })
  storedPath: string;

  @Column({
    nullable: true,
    name: 'stored_name',
    comment: '저장된 첨부파일명',
  })
  storedName: string;

  @Column({
    nullable: true,
    name: 'origin_name',
    comment: '원본 첨부파일명',
  })
  originName: string;

  @Column({
    nullable: true,
    name: 'type',
    comment: '첨부파일 타입',
  })
  type: string;

  @Column({
    nullable: true,
    name: 'size',
    comment: '첨부파일 크기(바이트)',
  })
  size: number;

  @Column({
    nullable: true,
    name: 'deleted',
    comment: '삭제 여부',
  })
  deleted: YN;
}
