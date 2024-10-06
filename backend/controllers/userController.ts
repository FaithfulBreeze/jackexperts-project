import { Request, Response } from "express"
import authController from "./authController"
import { User } from "../models/User"
import { randomUUID } from 'crypto'
import { Task } from "../models/Task"

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

    async deleteUser(req: Request & { userId?: string }, res: Response){
        try {
            await Task.destroy({
                where: {
                    id: req.userId
                }
            })
            await User.destroy({
                where: {
                    id: req.userId,
                }
            })
            res.status(204).end()
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

export default new UserController()