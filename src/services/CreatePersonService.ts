import { getRepository } from "typeorm"
import { Person } from "../entities/Person"
import {NaturalPerson} from '../entities/NaturalPerson'
import {JuridicalPerson} from '../entities/JuridicalPerson'

interface PersonRequest{
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

interface PromiseProps {
  person: object
  natural?: object
  juridical?: object
}

export class CreatePersonService {
  async execute({name, login, password, phone, type, state_registration, cpf, cnpj, rg}: PersonRequest): Promise<PromiseProps>{
    const repo = getRepository(Person)  
    const naturalRepo = getRepository(NaturalPerson)
    const juridicalRepo = getRepository(JuridicalPerson)

    const person = repo.create({
      name,
      login,
      password,
      phone,
      type,
      created_at: new Date(),
    })

    await repo.save(person)

    if(type === "natural"){
      const natural = naturalRepo.create({
        cpf,
        rg,
        id_person: person.id
      })

      await naturalRepo.save(natural)

      return {person, natural}
    }

    const juridical = juridicalRepo.create({
      state_registration,
      cnpj,
      id_person: person.id
    })

    await juridicalRepo.save(juridical)

    return {person, juridical}
  }
}