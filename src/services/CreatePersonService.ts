import { getRepository } from "typeorm"
import { Person } from "../entities/Person"

interface PersonRequest{
  name: string
  login: string
  password: string
  phone: string
  person_type: string
}

export class CreatePersonService {
  async execute({name, login, password, phone, person_type}: PersonRequest): Promise<Person>{
    const repo = getRepository(Person)  
  
    const person = repo.create({
      name,
      login,
      password,
      phone,
      person_type,
      created_at: new Date()
    })

    await repo.save(person)

    return person
  }
}