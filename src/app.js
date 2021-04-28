import cors from 'cors'
import morgan from 'morgan'
import express from 'express'

import routes from './api.routes'
import sequelize from './config/sequelize'
import userController from './controllers/user.controller'


const app = express()

sequelize.authenticate()
    .then(async () => {
        await sequelize.sync({ force: true })
        await userController.autoCreateAdmin();
    }).catch(e => console.log(e));


app
    .use(cors())
    .use(morgan('dev'))

    .use(express.urlencoded({ extended: false }))
    .use(express.json({ limit: process.env.BODY_SIZE }))

    .use('/api', routes)
    .use('/public', express.static('public'))
    .use('/', (_, res) => res.send('<h1>Welcome to goSafe API!</h1>'))

export default app
