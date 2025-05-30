import { OwnerType, YN } from 'src/common/entities/types';
import { BaseEntity, Column, Entity } from 'typeorm';

@Entity('t_refresh_token')
export class RefreshToken extends BaseEntity {
  @Column({
    nullable: true,
    name: 'owner_type',
    comment: '토큰 소유자 타입',
  })
  ownerType: OwnerType;

  @Column({
    nullable: true,
    name: 'owner_id',
    comment: '토큰 소유자 ID',
  })
  ownerId: string;

  @Column({
    nullable: true,
    name: 'token',
    comment: '리프레시 토큰 값',
  })
  token: string;

  @Column({
    nullable: true,
    name: 'expires_at',
    comment: '토큰 만료 시간',
  })
  expiresAt: Date;

  @Column({
    nullable: true,
    name: 'revoked',
    comment: '토큰 사용 중지 여부',
  })
  revoked: YN;
}
