import { Request, Response } from "express"
import authController from "./authController"

interface UserInterface{
    email: string,
    password: string
}

class UserController{
    createUser(req: Request, res: Response, userData: UserInterface, tempKeyIndex: number){
        if(tempKeyIndex == -1) return res.status(500).json({ message: "Error: No tempKey found."})
        authController.removeTempKey(tempKeyIndex)
        res.status(201).json({ message: "User created.", userData })
    }
}

export default new UserController()