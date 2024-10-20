"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const databaseConnection_1 = require("../services/databaseConnection");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        allowNull: true,
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    email: {
        allowNull: false,
        unique: true,
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        allowNull: false,
        unique: true,
        type: sequelize_1.DataTypes.STRING
    },
    accessToken: {
        allowNull: true,
        unique: true,
        type: sequelize_1.DataTypes.STRING
    }
}, {
    sequelize: databaseConnection_1.sequelize,
    tableName: 'users'
});
