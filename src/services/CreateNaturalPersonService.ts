import { getRepository } from "typeorm"
import { NaturalPerson } from "../entities/NaturalPerson"

interface PersonRequest{
  cpf: string;
  rg: string;
}

export class CreatePersonService {
  async execute({rg, cpf}: PersonRequest): Promise<NaturalPerson>{
    const repo = getRepository(NaturalPerson)  
  
    const person = repo.create({
      cpf,
      rg
    })

    await repo.save(person)

    return person
  }
}