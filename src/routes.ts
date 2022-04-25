import {Router} from 'express'
import {CreatePersonController } from './controllers/CreatePersonController'
import { DeletePersonController } from './controllers/DeletePersonController'

const routes = Router()

routes.post('/person', new CreatePersonController().handle)
routes.delete('/person/:id', new DeletePersonController().handle)

export {routes}