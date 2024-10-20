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
exports.jwtVerify = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../models/User");
const jwtVerify = (req, res, next) => {
    const { cookies } = req;
    if (!cookies.jwt)
        return res.status(401).send('Unauthorized'); //no jwt cookie
    jsonwebtoken_1.default.verify(cookies.jwt, process.env.TOKEN_SECRET, (err_1, _a) => __awaiter(void 0, [err_1, _a], void 0, function* (err, { payload }) {
        if (err)
            return res.status(401).send('Unauthorized'); // not authorized
        try {
            const user = yield User_1.User.findByPk(payload);
            if (!user)
                throw new Error('Failed on fetching requested id.');
            if (user.accessToken != cookies.jwt)
                return res.status(401).send('Unauthorized'); // not authorized
            req.userId = payload;
            next();
        }
        catch (error) {
            res.status(500).json(error);
        }
    }));
};
exports.jwtVerify = jwtVerify;
