import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('boardImages')
export class boardImages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  board_id: number;

  @Column({ type: 'varchar', length: 45 })
  img_url: string;
}
