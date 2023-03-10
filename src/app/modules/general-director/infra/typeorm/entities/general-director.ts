import { randomUUID } from 'node:crypto';
import { Users } from '../../../../accounts/infra/typeorm/entities/users';
import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('tb_general_director')
export class GeneralDirector {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  create_at: Date;

  @OneToOne(() => Users)
  @JoinColumn({ name: 'user_id' })
  users: Users;

  constructor() {
    if (!this.id) this.id = randomUUID();
  }
}
