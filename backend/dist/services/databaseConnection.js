"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
exports.sequelize = new sequelize_1.Sequelize(database_1.config);
