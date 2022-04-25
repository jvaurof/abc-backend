import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('natural_person')
export class NaturalPerson{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_person: number

  @Column()
  cpf: string;

  @Column()
  rg: string
}