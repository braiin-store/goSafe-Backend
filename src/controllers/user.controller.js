import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { Role, User } from '../config/relationships'
import { Controller } from '../config/controller'

const generateToken = (payload) => jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_DURATION
})
class UserController extends Controller {

    constructor() {
        super(User)
    }
    autoCreateAdmin= async()=>{
       try {
        const user = await User.findByPk(1); //root admin id
        const role =await Role.findByPk(1);
        
        if (user==null){
            if(role==null){
                await Role.create({id:1,name:'administrador'})
            }
            let hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)
            const rootUser={id:1,name:'administrador',email:process.env.ADMIN_MAIL,password:hashedPassword,RoleId:1}
            console.log(rootUser);
             await User.create(rootUser)
        }
       } catch (error) {
         console.log(error);  
       }
    }
    store = async ({ body }, res) => {
        try {
            let hashedPassword = await bcrypt.hash(body['password'], 10)
            
            body['RoleId'] = 2
            body['password'] = hashedPassword
            
            let user = await User.create(body)
            let token = generateToken(user.toJSON())

            res.status(200).json(await user.update({ token }))
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

    signout = async (req, res) => {
        try {
            let userID = req.body['userID']
            let user = await User.findOne({ where: { id: userID } })

            res.status(200).json(await user.update({ token: null }))
        } catch (error) {
            console.error(error);
            res.status(500).json({ error })
        }
    }

    show = async (req, res) => {
        try {
            console.log(req.body);
            let user = req.body['user']

            user.set('token', null)
            let token = generateToken(user.toJSON())

            res.status(200).json(await user.update({ token }))
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}

export default new UserController()