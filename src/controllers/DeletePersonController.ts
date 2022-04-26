import { Request, Response } from "express";
import { DeletePersonService } from "../services/DeletePersonService";

export class DeletePersonController{
  async handle(request: Request, response: Response){
    const {id} = request.params

    const service = new DeletePersonService()

    try{
      await service.execute(Number(id))

      return response.status(200).end()
    }catch(error){
      return response.status(400).json(error.message)
    }    
  }
}
