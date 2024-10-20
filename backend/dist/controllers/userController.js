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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = __importDefault(require("./authController"));
const User_1 = require("../models/User");
const crypto_1 = require("crypto");
const Task_1 = require("../models/Task");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    checkTakenEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const isEmailInUse = yield User_1.User.findOne({
                where: {
                    email
                }
            });
            return isEmailInUse ? true : false;
        });
    }
    createUser(req, res, userData, tempKeyIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            if (tempKeyIndex == -1)
                return res.status(500).json({ message: "Error: No tempKey found." });
            authController_1.default.removeTempKey(tempKeyIndex);
            try {
                userData.password = bcrypt_1.default.hashSync(userData.password, 10);
                const user = yield User_1.User.create(Object.assign(Object.assign({}, userData), { accessToken: '', id: (0, crypto_1.randomUUID)() }));
                res.status(201).json({ message: "User created.", user });
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Task_1.Task.destroy({
                    where: {
                        userId: req.userId
                    }
                });
                yield User_1.User.destroy({
                    where: {
                        id: req.userId,
                    }
                });
                res.status(204).end();
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    updatePassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPassword = req.body.password;
                const hashedNewPassword = bcrypt_1.default.hashSync(newPassword, 10);
                User_1.User.update({ password: hashedNewPassword }, {
                    where: {
                        id: req.userId
                    }
                });
                res.status(204).end();
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.default = new UserController();
