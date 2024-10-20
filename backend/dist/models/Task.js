"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const sequelize_1 = require("sequelize");
const databaseConnection_1 = require("../services/databaseConnection");
const User_1 = require("./User");
class Task extends sequelize_1.Model {
}
exports.Task = Task;
Task.init({
    id: {
        allowNull: true,
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    title: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    done: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    },
    compleationDeadline: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE
    },
    userId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: User_1.User,
            key: 'id'
        }
    }
}, {
    sequelize: databaseConnection_1.sequelize,
    tableName: 'tasks'
});
