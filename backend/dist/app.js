"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("./config/dotenv"));
const api_1 = __importDefault(require("./routes/api"));
const startServer_1 = require("./services/startServer");
(0, dotenv_1.default)();
exports.app = (0, express_1.default)();
exports.app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});
exports.app.use((0, cors_1.default)({ origin: (origin, callback) => {
        callback(null, true);
    } }));
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use(express_1.default.json());
exports.app.use((0, cookie_parser_1.default)());
exports.app.use('/api', api_1.default);
(0, startServer_1.startServer)();
