import { getRepository } from "typeorm";
import { Person } from "../entities/Person";

export class DeletePersonService {
  async execute(id: number){
    const repo =getRepository(Person)

    if(!(await repo.findOne({where: {id: id} }))){
      return new Error('Category does not exists.')
    }

    await repo.delete(id)

  }
}