import { Request, Response } from "express";
import { DeletePersonService } from "../services/DeletePersonService";

export class DeletePersonController{
  async handle(request: Request, response: Response){
    const {id} = request.params

    const service = new DeletePersonService()

    const result = await service.execute(Number(id))

    if(result instanceof Error){
      return response.status(400).json()
    }

    return response.status(200).end()
  }
}