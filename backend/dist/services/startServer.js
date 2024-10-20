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
exports.startServer = void 0;
const app_1 = require("../app");
const databaseConnection_1 = require("./databaseConnection");
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield databaseConnection_1.sequelize.sync();
        app_1.app.listen(3030, () => console.log('Server started.'));
    }
    catch (error) {
        console.log('Could not connect to the database\nChecking for the database...\n');
        setTimeout(() => (0, exports.startServer)(), 2000);
    }
});
exports.startServer = startServer;
