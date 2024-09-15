import { Request, Response } from 'express'
import { Task } from '../models/Task'

class TaskController{
    async createTask(req: Request & { payload?: string }, res: Response){
        const { body } = req
        const data = {
            ...body,
            userId: req.payload
        }
        try {
            const task = await Task.create(data)
            res.status(201).json(task)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async listTasks(req: Request & { payload?: string }, res: Response){
        try {
            const tasks = await Task.findAll({
                where:{
                    userId: req.payload
                }
            })
            res.json(tasks)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new TaskController()