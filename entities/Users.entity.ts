import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('varchar', { length: 20 })
  name: string;

  @Column({ type: 'int' })
  social_id: number;

  @Column('varchar', { unique: true, length: 30 })
  email: string;

  @Column('varchar', { length: 30 })
  profile_image: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
