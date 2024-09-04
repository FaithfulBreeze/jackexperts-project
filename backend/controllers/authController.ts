import { Request, Response } from 'express'

class AuthController{

    logUser(req: Request, res: Response){
        res.json(req.body)
    }
}

export default new AuthController()