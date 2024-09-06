import { Request, Response } from 'express'
import { randomBytes } from 'crypto'
import nodemailer from 'nodemailer'
import userController from './userController'

class AuthController{

    // Temporary keys are used as a token (expires in 5 min) to verify if user has access to the email send on creation
    // In case user has access and verify, the temporary key is deleted and can not be used anymore
    // if the user has no access to the email, then the temporary keys will expire and will be deleted from the array

    private static tempCreationKeys: { email: string, tempKey: string }[] = [] // Array of temporary keys

    removeTempKey(index: number){ // Method that is used to remove temporary key from array (accessible from outside the class)
        AuthController.tempCreationKeys.splice(index, 1)
    }

    static setTempKeyTimeout(index: number){ // Method tha is used to set expire timeout of temporary keys
        setTimeout(() => {
            AuthController.tempCreationKeys.splice(index, 1)
        }, 1000 * 60 * 5)
    }

    login(req: Request, res: Response){
        res.json(req.body)
    }

    signup(req: Request, res: Response){ // Method to handle signup requests
        const { body } = req

        if(req.params.tempKey){ // If this is true, then the user is sending the temporary key (means that the user is verifying the email)
            const tempKeyIndex = AuthController.tempCreationKeys.findIndex((tempKey) => tempKey.email == body.email)
            return userController.createUser( // The userController will create the user in the database case the indes is not -1
                req,
                res,
                body,
                tempKeyIndex
            )
        }

        const tempKey = randomBytes(16).toString('hex') // Generates temporary key

        try {
            const transporter = nodemailer.createTransport({ // Defines credentials for nodemailer
                service: 'gmail',
                auth: {
                    user: 'todomanagermailer@gmail.com',
                    pass: 'caze nhaa znba fmlw'
                }
            })

            const mailOptions = { // Defines the mail settings
                from: 'todomanagermailer@gmail.com',
                to: body.email,
                subject: 'Email verify',
                text: `Paste the key and confirm to finish user creation\nThis key is valid for 5 minutes.\nKey: ${tempKey}`
            }

            transporter.sendMail(mailOptions, () => res.status(204).end()) // Send mail, if success response with 204 status

            AuthController.tempCreationKeys.push({ // inserts the temporary key in the array
                email: body.email,
                tempKey
            })

            // Finds the temporary key in the index to set expire time (setTempKeyTimeout receives the index as argument)
            AuthController.setTempKeyTimeout(AuthController.tempCreationKeys.findIndex((tempKey) => tempKey.email == body.email))
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new AuthController()