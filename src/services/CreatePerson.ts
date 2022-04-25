import { getRepository } from "typeorm"
import { Person } from "../entities/Person"

interface PersonRequest{
  name: string
  login: string
  password: string,
  cpf: string
  rg: string
  phone: string
}

class CreatePersonService {
  async execute({name, login, password, cpf, rg, phone}: PersonRequest): Promise<Person>{
    const repo = getRepository(Person)  
  
    const person = repo.create({
      name,
      login,
      password,
      cpf,
      rg,
      phone
    })

    await repo.save(person)

    return person
  }
}