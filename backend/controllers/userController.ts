import { Request, Response } from "express"
import authController from "./authController"
import { User } from "../models/User"
import { randomUUID } from 'crypto'

interface UserInterface{
    email: string,
    password: string
}

class UserController{

    async checkTakenEmail(email: string): Promise<boolean>{
        const isEmailInUse = await User.findOne({
            where: {
                email
            }
        })
        return isEmailInUse ? true : false
    }

    async createUser(req: Request, res: Response, userData: UserInterface, tempKeyIndex: number){
        if(tempKeyIndex == -1) return res.status(500).json({ message: "Error: No tempKey found." })
        authController.removeTempKey(tempKeyIndex)
        try {
            const user = await User.create({
                ...userData,
                accessToken: '',
                id: randomUUID()
            })
            res.status(201).json({ message: "User created.", user })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async listUsers(req: Request, res: Response){
        try {
            const users = await User.findAll()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

export default new UserController()