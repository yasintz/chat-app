import { Entity, Column } from 'typeorm';

@Entity()
export class SimpleUser {
  @Column({ unique: true, primary: true })
  username: string;

  @Column()
  encryptedPassword: string;
}
