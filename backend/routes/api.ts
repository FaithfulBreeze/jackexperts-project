import express from 'express'
import authController from '../controllers/authController'
const router = express.Router()

router.post('/logUser', authController.logUser)

export default router