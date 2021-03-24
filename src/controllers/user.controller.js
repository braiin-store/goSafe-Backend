import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { User } from '../config/relationships'
import { Controller } from '../config/controller'

const generateToken = (payload) => jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_DURATION
})
class UserController extends Controller {

    constructor() {
        super(User)
    }

    store = async ({ body }, res) => {
        try {
            let hashedPassword = await bcrypt.hash(body['password'], 10)
            
            body['RoleId'] = 2
            body['password'] = hashedPassword
            
            let user = await User.create(body)
            let token = generateToken(user.toJSON())

            res.json(await user.update({ token }))
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

    signout = async (req, res) => {
        try {
            let userID = req.body['userID']
            let user = await User.findOne({ where: { id: userID } })

            res.json(await user.update({ token: null }))
        } catch (error) {
            console.error(error);
            res.status(500).json({ error })
        }
    }

    show = async (req, res) => {
        try {
            let user = req.body['user']

            user.set('token', null)
            let token = generateToken(user.toJSON())

            res.json(await user.update({ token }))
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}

export default new UserController()