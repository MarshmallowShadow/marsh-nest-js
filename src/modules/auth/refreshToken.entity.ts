import { OwnerType, YN } from 'src/common/entities/types';
import { BaseEntity, Column, Entity } from 'typeorm';

@Entity('t_refresh_token')
export class RefreshToken extends BaseEntity {
  @Column()
  ownerType: OwnerType;

  @Column()
  ownerId: string;

  @Column()
  token: string;

  @Column()
  expiresAt: Date;

  @Column()
  revoked: YN;
}
