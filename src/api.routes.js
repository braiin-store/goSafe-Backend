import { Router } from 'express'

import user from './controllers/user.controller'
import cliente from './controllers/cliente.controller'
import conductor from './controllers/conductor.controller'

import auth from './middlewares/auth.middleware'

const router = Router()

router
    // CLIENTES
    .get('/clientes', cliente.all)
    .post('/clientes', cliente.store)
    .get('/clientes/:id', cliente.find)
    .put('/clientes/:id', cliente.update)
    .delete('/clientes/:id', cliente.destroy)
    // CONDUCTORES
    .get('/conductores', conductor.all)
    .post('/conductores', conductor.store)
    .get('/conductores/:id', conductor.find)
    .put('/conductores/:id', conductor.update)
    .delete('/conductores/:id', conductor.destroy)
    // LOGIN
    .post('/signup', user.store)
    .post('/signin', auth.verifyLogin, user.show)
    .post('/signout', auth.verifyToken, user.signout)

export default router