import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { User } from '../config/relationships'

const verifyLogin = async (req, res, next) => {
    const { email, password } = req.body
    try {
        let user = await User.findOne({ where: { email } })
        if (!user) {
            throw new Error('404,User Not Found')
        }

        let hashedPassword = user.getDataValue('password')
        let validPassword = await bcrypt.compare(password, hashedPassword)
        console.log(validPassword);
        if (!validPassword) {
            throw new Error('401,Wrong Password')
        }
        req.body['user'] = user
        next()
    } catch (error) {
        let messages = error.message.split(',')
        console.error(messages[1]);
        return res.status(messages[0]).json({ error: messages[1] })
    }

}

const verifyToken = async (req, res, next) => {
    try {
        let token = req.headers[process.env.AUTH_HEADER]

        if (!token) {
            throw new Error('401,Not Authorized')
        }

        let userDecoded = jwt.verify(token, process.env.JWT_SECRET)
        req.body['userID'] = userDecoded['id']

        next()
    } catch (error) {
        let messages = error.message.split(',')
        console.error(messages[1])
        res.status(messages[0]).json({ error: messages[1] })
    }
}

export default {
    verifyLogin, verifyToken
}