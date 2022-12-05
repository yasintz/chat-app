import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SimpleUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  encryptedPassword: string;
}
