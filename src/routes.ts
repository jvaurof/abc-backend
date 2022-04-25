import {Router} from 'express'
import {CreatePersonController } from './controllers/CreatePersonController'
import { DeletePersonController } from './controllers/DeletePersonController'
import { GetAllPersonController } from './controllers/GetAllPersonController'
import { UpdatePersonController } from './controllers/UpdatePersonController'

const routes = Router()

routes.post('/person', new CreatePersonController().handle)
routes.delete('/person/:id', new DeletePersonController().handle)
routes.put('/person/:id', new UpdatePersonController().handle)
routes.get('/person', new GetAllPersonController().handle)

export {routes}