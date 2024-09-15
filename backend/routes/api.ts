import express from 'express'
import authController from '../controllers/authController'
import taskController from '../controllers/taskController'
import { jwtVerify } from '../middlewares/jwtVerify'
const router = express.Router()

router.post('/login', authController.login)
router.post('/signup', authController.signup)
router.post('/signup/:tempKey', authController.signup)
router.post('/tasks/create', jwtVerify, taskController.createTask)

router.get('/isUserLogged', jwtVerify, authController.userIsLogged)
router.get('/tasks', jwtVerify, taskController.listTasks)


export default router