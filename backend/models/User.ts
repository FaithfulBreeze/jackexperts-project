import { UUIDV4, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../services/databaseConnection";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
    declare id: string
    declare email: string
    declare password: string
    declare accessToken: string
}

User.init(
    {
        id:{
            allowNull: true,
            type: DataTypes.STRING,
            primaryKey: true,
        },
        email: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING
        },
        accessToken: {
            allowNull: true,
            unique: true,
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        tableName: 'users'
    }
)