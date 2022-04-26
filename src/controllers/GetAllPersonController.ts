import { Request, Response } from "express";
import { GetAllPersonService } from "../services/GetAllPersonService";

export class GetAllPersonController {
  async handle(request: Request, response: Response){
    const service = new GetAllPersonService()

    try{
      const person = await service.execute()

      return response.json(person)
    }catch(error){
      return response.status(400).json(error.message)
    }
    
  }
}