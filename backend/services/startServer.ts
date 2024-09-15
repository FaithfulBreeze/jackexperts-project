import { app } from "../app"
import { sequelize } from "./databaseConnection"

export const startServer = async () => {
    try {
        sequelize.sync({ alter: true })
        app.listen(3030, () => console.log('Server started.'))
    } catch (error) {
        console.log('Could not connect to the database\nChecking for the database...\n')
        setTimeout(() => startServer(), 2000)
    }
}