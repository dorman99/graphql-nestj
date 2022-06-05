import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('trainers')
export class Trainer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  username: string;
}
