import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('t_attachment_file')
export class AttachmentFile extends BaseEntity {
  @Column()
  storedPath: string;

  @Column()
  storedName: string;

  @Column()
  originName: string;

  @Column()
  type: string;

  @Column()
  size: number;
}
