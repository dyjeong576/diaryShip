import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tagGroups')
export class tagGroups {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'text' })
  tag_id: number;

  @Column({ type: 'text' })
  board_id: number;
}
