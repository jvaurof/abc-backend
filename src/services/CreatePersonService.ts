import { getRepository } from "typeorm"
import { Person } from "../entities/Person"
import {NaturalPerson} from '../entities/NaturalPerson'
import {JuridicalPerson} from '../entities/JuridicalPerson'

interface PersonRequest{
  name: string
  login: string
  password: string
  phone: string
  person_type: string
}

interface PromiseProps {
  person: object
  natural: object
}

export class CreatePersonService {
  async execute({name, login, password, phone, person_type}: PersonRequest): Promise<PromiseProps>{
    const repo = getRepository(Person)  
    const naturalRepo = getRepository(NaturalPerson)  

    const person = repo.create({
      name,
      login,
      password,
      phone,
      type: "natural",
      created_at: new Date(),
    })

    await repo.save(person)

    const natural = naturalRepo.create({
      cpf: '6965',
      rg: '321',
      id_person: person.id
    })

    await naturalRepo.save(natural)

    return {person, natural}
  }
}