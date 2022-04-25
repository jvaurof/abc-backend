import { getManager } from "typeorm";
import { Person } from "../entities/Person";

export class GetAllPersonService {
  async execute(){
    const entityManager = getManager()

    const response = await entityManager.query(`select * from person 
    full join juridical_person on person.id = juridical_person.id_person
    full join natural_person on person.id = natural_person.id_person`)
console.log(response)
    return response
  }
}