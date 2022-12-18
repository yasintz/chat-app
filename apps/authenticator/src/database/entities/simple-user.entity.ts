import { Entity, Column, OneToMany } from 'typeorm';
import { SimpleTodo } from './simple-todo.entity';

@Entity()
export class SimpleUser {
  @Column({ unique: true, primary: true })
  username: string;

  @Column()
  encryptedPassword: string;

  @OneToMany(() => SimpleTodo, (photo) => photo.user)
  todos: SimpleTodo[];
}
