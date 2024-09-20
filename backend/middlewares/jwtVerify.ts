import { Request, Response, NextFunction } from "express"
import jwt, { Secret } from 'jsonwebtoken'
import { User } from "../models/User"

export const jwtVerify = (req: Request & { userId?: string }, res: Response, next: NextFunction) => {
    const { cookies } = req
    if(!cookies.jwt)  return res.status(401).send('Unauthorized') //no jwt cookie

    jwt.verify(cookies.jwt, process.env.TOKEN_SECRET as Secret, async (err: any, { payload }: any) => {
        if(err) return res.status(401).send('Unauthorized') // not authorized
        try {
            const user = await User.findByPk(payload)
            if(!user) throw new Error('Failed on fetching requested id.')
            if(user.accessToken != cookies.jwt) return res.status(401).send('Unauthorized') // not authorized
            req.userId = payload
            next()
        } catch (error) {
            res.status(500).json(error)
        }
    })
}