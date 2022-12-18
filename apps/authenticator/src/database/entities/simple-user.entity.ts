import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SimpleTodo } from './simple-todo.entity';

@Entity()
export class SimpleUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  encryptedPassword: string;

  @OneToMany(() => SimpleTodo, (photo) => photo.user)
  todos: SimpleTodo[];
}
