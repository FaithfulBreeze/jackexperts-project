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
const crypto_1 = require("crypto");
const nodemailer_1 = __importDefault(require("nodemailer"));
const userController_1 = __importDefault(require("./userController"));
const User_1 = require("../models/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class AuthController {
    removeTempKey(index) {
        AuthController.tempCreationKeys.splice(index, 1);
    }
    static setTempKeyTimeout(index) {
        setTimeout(() => {
            AuthController.tempCreationKeys.splice(index, 1);
        }, 1000 * 60 * 5);
    }
    userIsLogged(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(req.userId);
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            try {
                const user = yield User_1.User.findOne({
                    where: {
                        email: body.email
                    }
                });
                if (!user)
                    return res.status(404).json({ message: "User not found." });
                const match = bcrypt_1.default.compareSync(body.password, user.password);
                if (!match)
                    return res.status(400).json({ message: "Wrong password." });
                const token = jsonwebtoken_1.default.sign(//generating jwt for user
                { payload: user.id }, process.env.TOKEN_SECRET, { expiresIn: '12h' });
                res.cookie('jwt', token, {
                    httpOnly: true,
                    maxAge: 24000 * 60 * 60,
                    sameSite: 'none',
                    secure: true
                });
                yield User_1.User.update({ accessToken: token }, {
                    where: {
                        id: user.id
                    }
                });
                res.status(200).json({ token });
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            if (req.params.tempKey) { // If this is true, then the user is sending the temporary key (means that the user is verifying the email)
                const tempKeyIndex = AuthController.tempCreationKeys.findIndex((tempKey) => tempKey.email == body.email);
                return userController_1.default.createUser(// The userController will create the user in the database case the indes is not -1
                req, res, body, tempKeyIndex);
            }
            if ((yield userController_1.default.checkTakenEmail(body.email)) == true)
                return res.status(400).json({ message: "Email already in use." });
            const tempKey = (0, crypto_1.randomBytes)(16).toString('hex'); // Generates temporary key
            try {
                const transporter = nodemailer_1.default.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'todomanagermailer@gmail.com',
                        pass: 'caze nhaa znba fmlw'
                    }
                });
                const mailOptions = {
                    from: 'todomanagermailer@gmail.com',
                    to: body.email,
                    subject: 'Email verify',
                    text: `Paste the key and confirm to finish user creation\nThis key is valid for 5 minutes.\nKey: ${tempKey}`
                };
                transporter.sendMail(mailOptions, () => {
                    res.status(200).json({ message: 'Email sent.' });
                }); // Send mail, if success response with 200 status
                AuthController.tempCreationKeys.push({
                    email: body.email,
                    tempKey
                });
                // Finds the temporary key in the index to set expire time (setTempKeyTimeout receives the index as argument)
                AuthController.setTempKeyTimeout(AuthController.tempCreationKeys.findIndex((tempKey) => tempKey.email == body.email));
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
// Temporary keys are used as a token (expires in 5 min) to verify if user has access to the email send on creation
// In case user has access and verify, the temporary key is deleted and can not be used anymore
// if the user has no access to the email, then the temporary keys will expire and will be deleted from the array
AuthController.tempCreationKeys = []; // Array of temporary keys
exports.default = new AuthController();
