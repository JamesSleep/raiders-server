import { IsNotEmpty } from 'class-validator';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Users extends CommonEntity {
  @IsNotEmpty()
  @Column({ nullable: false })
  uid: string;

  @IsNotEmpty()
  @Column({ nullable: false })
  status: string;
}
