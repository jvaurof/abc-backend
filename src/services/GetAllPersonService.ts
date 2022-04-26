import { getManager } from "typeorm";
import {decrypt} from '../util/decrypt'

export class GetAllPersonService {
  async execute(){
    const entityManager = getManager()

    const response = await entityManager.query(`select person.id, person.name, person.login, person.password, person.phone,
			 person.type, person.created_at,     
       juridical_person.cnpj,
       juridical_person.state_registration,
       natural_person.rg,
       natural_person.cpf
       
       from person 
    full join juridical_person on person.id = juridical_person.id_person
    full join natural_person on person.id = natural_person.id_person order by person.id desc`)

    return response.map((person) => {
      //console.log(decrypt(person.password))
      return {
        ...person,
        password: decrypt(person.password)
      }
    })
  }
}
