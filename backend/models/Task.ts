import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../services/databaseConnection";
import { User } from "./User";

export class Task extends Model<InferAttributes<Task>, InferCreationAttributes<Task>>{
    declare title: string
    declare description: string
    declare done: boolean
    declare compleationDeadline: Date
    declare userId: number
}

Task.init(
    {
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING
        },
        done: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        compleationDeadline: {
            allowNull: false,
            type: DataTypes.DATE
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        }
    },
    {
        sequelize,
        tableName: 'tasks'
    }
)