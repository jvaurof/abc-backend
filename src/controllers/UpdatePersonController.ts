import { Request, Response } from "express";
import { UpdatePersonService } from "../services/UpdatePersonService";

export class UpdatePersonController{
  async handle(request: Request, response: Response){
    const {id} = request.params;

    const service = new UpdatePersonService()

    const result = await service.execute(Number(id), request.body)

    if(result instanceof Error){
      return response.status(400).json(result.message)
    }

    return response.json(result)
     
  }
}