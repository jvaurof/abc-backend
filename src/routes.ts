import {Router} from 'express'
import {CreatePersonController } from './controllers/CreatePersonController'

const routes = Router()

routes.post('/person', new CreatePersonController().handle)

export {routes}