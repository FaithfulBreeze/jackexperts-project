import { app } from "../app"
import { sequelize } from "./databaseConnection"

export const startServer = () => {
    try {
        sequelize.sync()
        app.listen(3030)
    } catch (error) {
        setTimeout(() => startServer, 2000)
    }
}