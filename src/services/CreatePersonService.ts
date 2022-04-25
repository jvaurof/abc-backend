import { getRepository } from "typeorm"
import { Person } from "../entities/Person"

interface PersonRequest{
  name: string
  login: string
  password: string
  phone: string
}

export class CreatePersonService {
  async execute({name, login, password, phone}: PersonRequest): Promise<Person>{
    const repo = getRepository(Person)  
  
    const person = repo.create({
      name,
      login,
      password,
      phone
    })

    await repo.save(person)

    return person
  }
}