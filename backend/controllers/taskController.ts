import { Request, Response } from 'express'
import { Task } from '../models/Task'

class TaskController{
    async createTask(req: Request & { userId?: string }, res: Response){
        const { body } = req
        body.compleationDeadline = body.compleationDeadline.split('T').join(' ')
        const data = {
            ...body,
            userId: req.userId
        }
        try {
            const task = await Task.create(data)
            res.status(201).json(task)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async listTasks(req: Request & { userId?: string }, res: Response){
        try {
            const tasks = await Task.findAll({
                where:{
                    userId: req.userId
                }
            })
            res.json(tasks)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new TaskController()