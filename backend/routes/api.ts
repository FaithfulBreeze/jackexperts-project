import express from 'express'
import authController from '../controllers/authController'
const router = express.Router()

router.post('/login', authController.login)
router.post('/signup', authController.signup)
router.post('/signup/:tempKey', authController.signup)

export default router