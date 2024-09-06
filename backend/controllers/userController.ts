import { Request, Response } from "express"
interface UserInterface{
    email: string,
    password: string
}

interface TempKeyInterface{
    email: string,
    tempKey: string
}

class UserController{
    createUser(req: Request, res: Response, userData: UserInterface, tempKey: TempKeyInterface | undefined){
        if(!tempKey) return res.status(500).json({ message: "Error: No tempKey found."})
        res.status(201).json({ message: "User created.", userData })
    }
}

export default new UserController()