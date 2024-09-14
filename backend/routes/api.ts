import express from 'express'
import authController from '../controllers/authController'
import userController from '../controllers/userController'
import { jwtVerify } from '../middlewares/jwtVerify'
const router = express.Router()

router.post('/login', authController.login)
router.post('/signup', authController.signup)
router.post('/signup/:tempKey', authController.signup)

router.get('/isUserLogged', jwtVerify, authController.userIsLogged)


export default router