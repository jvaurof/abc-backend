import { Request, Response } from "express";
import { CreatePersonService } from '../services/CreatePersonService'

export class CreatePersonController {
  async handle(request: Request, response: Response){
    const service = new CreatePersonService()

    try{
      const result = await service.execute(request.body)
      return response.json(result)
    }catch(error){
      return response.status(400).json(error.message)
    }
  }
}