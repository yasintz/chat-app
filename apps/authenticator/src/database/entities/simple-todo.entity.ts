import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { SimpleUser } from './simple-user.entity';

@Entity()
export class SimpleTodo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  text: string;

  @Column()
  completed: boolean;

  @Column()
  userId: string;

  @ManyToOne(() => SimpleUser, (user) => user.todos)
  user: SimpleUser;
}
