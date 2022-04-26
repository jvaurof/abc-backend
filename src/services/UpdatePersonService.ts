import { getRepository } from "typeorm";
import { JuridicalPerson } from "../entities/JuridicalPerson";
import { NaturalPerson } from "../entities/NaturalPerson";
import { Person } from "../entities/Person";

interface DataProps{
  name: string
  login: string
  password: string
  phone: string
  type: string,
  state_registration: string
  cnpj: string
  cpf: string
  rg: string
}

export class UpdatePersonService {
  async execute(id: number, data: DataProps){
    const repo = getRepository(Person)
    const naturalRepo = getRepository(NaturalPerson)
    const juridicalRepo = getRepository(JuridicalPerson)

    const person = await repo.findOne({where: {id: id} })

    if(!person){
      return new Error('Person does not exists.')
    }

    person.name = data.name
    person.password = data.password
    person.phone = data.phone
     
    await repo.save(person)   

    const naturalPerson = await naturalRepo.findOne({where: {id_person: id} })
    const juridicalPerson = await juridicalRepo.findOne({where: {id_person: id} })

    if(data.type === 'natural'){
      naturalPerson.rg = data.rg
      naturalPerson.cpf = data.cpf

      await naturalRepo.save(naturalPerson)

      return {person, naturalPerson}
    }else{
      juridicalPerson.cnpj = data.cnpj
      juridicalPerson.state_registration = data.state_registration

      await juridicalRepo.save(juridicalPerson)

      return {person, juridicalPerson}
    } 
  }
}
