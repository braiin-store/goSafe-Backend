import { Router } from 'express'

import cliente from './controllers/cliente.controller'
import conductor from './controllers/conductor.controller'

const router = Router({ strict: true })

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
    // 
export default router