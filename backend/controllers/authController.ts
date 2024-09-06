import { Request, Response } from 'express'
import { randomBytes } from 'crypto'
import nodemailer from 'nodemailer'
import userController from './userController'

class AuthController{

    private static tempCreationKeys: { email: string, tempKey: string }[] = []

    login(req: Request, res: Response){
        res.json(req.body)
    }

    signup(req: Request, res: Response){
        const { body } = req
        if(req.params.tempKey){
            return userController.createUser(
                req,
                res,
                body,
                AuthController.tempCreationKeys.find((tempKey) => tempKey.email == body.email)
            )
        }
        const tempKey = randomBytes(16).toString('hex')
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'todomanagermailer@gmail.com',
                    pass: 'todomanager1234'
                }
            })
            const mailOptions = {
                from: 'todomanagermailer@gmail.com',
                to: body.email,
                subject: 'Email verify',
                text: `Paste the key and confirm to finish user creation\nKey: ${tempKey}`
            }
            transporter.sendMail(mailOptions)
            AuthController.tempCreationKeys.push({
                email: body.email,
                tempKey
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new AuthController()