import { Request, Response } from "express";
import { CreatePersonService } from '../services/CreatePersonService'

export class CreatePersonController {
  async handle(request: Request, response: Response){
    const service = new CreatePersonService()

    const result = await service.execute(request.body)

    if(result instanceof Error){
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }
}