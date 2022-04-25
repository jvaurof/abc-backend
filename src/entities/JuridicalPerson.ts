import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('juridical_person')
export class JuridicalPerson{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_person: number

  @Column()
  cnpj: string;

  @Column()
  state_registration: string
}