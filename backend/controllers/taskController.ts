import { Request, Response } from 'express'
import { Task } from '../models/Task'
import { User } from '../models/User'

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

    async updateTask(req: Request, res: Response){
        const taskId = req.query.id
        if(!taskId) return res.status(400).json({ message: "No task provided." })
        try {
            const task = await Task.findByPk(taskId as string)
            if(!task) return res.status(404).json({ message: "Task not found." })
            task.done = !task.done
            task.save()
            res.status(204).json({ message: "Task updated." })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async deleteTask(req: Request, res: Response){
        const taskId = req.query.id
        if(!taskId) return res.status(400).json({ message: "No task provided." })
        try {
            const task = await Task.findByPk(taskId as string)
            if(!task) return res.status(404).json({ message: "Task not found." })
            await task.destroy()
            res.status(204).json({ message: "Task deleted." })
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new TaskController()