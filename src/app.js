import cors from 'cors'
import morgan from 'morgan'
import express from 'express'

import routes from './api.routes'
import sequelize from './config/sequelize'

const app = express()

sequelize.authenticate()
    // .then(() => sequelize.sync({ force: true }))

app
    .use(cors())
    .use(morgan('dev'))

    .use(express.json())
    .use(express.urlencoded({ extended: false }))

    .use('/api', routes)
    .use('/', (_, res) => res.send('<h1>Welcome to goSafe API!</h1>'))

export default app