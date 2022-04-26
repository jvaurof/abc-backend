import { Request, Response } from "express";
import { UpdatePersonService } from "../services/UpdatePersonService";

export class UpdatePersonController{
  async handle(request: Request, response: Response){
    const {id} = request.params;

    const service = new UpdatePersonService()

    try{
      const result = await service.execute(Number(id), request.body)
      return response.json(result)
    }catch(error){
      return response.status(400).json(error.message)
    } 
  }
}