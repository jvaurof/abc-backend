import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from 'typeorm'

@Entity('person')
export class Person{
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  login: string

  @Column()
  password: string
  
  @Column()
  phone: string

  @Column()
  cpf: string

  @Column()
  runing: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}