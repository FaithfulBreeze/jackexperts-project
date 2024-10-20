"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("../models/Task");
const crypto_1 = require("crypto");
class TaskController {
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            body.compleationDeadline = body.compleationDeadline.split('T').join(' ');
            const data = Object.assign(Object.assign({ id: (0, crypto_1.randomUUID)() }, body), { userId: req.userId });
            try {
                const task = yield Task_1.Task.create(data);
                res.status(201).json(task);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    listTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield Task_1.Task.findAll({
                    where: {
                        userId: req.userId
                    }
                });
                res.json(tasks);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    updateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskId = req.query.id;
            if (!taskId)
                return res.status(400).json({ message: "No task provided." });
            try {
                const task = yield Task_1.Task.findByPk(taskId);
                if (!task)
                    return res.status(404).json({ message: "Task not found." });
                task.done = !task.done;
                task.save();
                res.status(204).json({ message: "Task updated." });
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskId = req.query.id;
            if (!taskId)
                return res.status(400).json({ message: "No task provided." });
            try {
                const task = yield Task_1.Task.findByPk(taskId);
                if (!task)
                    return res.status(404).json({ message: "Task not found." });
                yield task.destroy();
                res.status(204).json({ message: "Task deleted." });
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.default = new TaskController();
