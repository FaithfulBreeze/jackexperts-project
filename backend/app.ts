import express, {Request} from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import config from './config/dotenv'
import apiRoutes from './routes/api'
import { startServer } from './services/startServer'

config()
export const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
})
app.use(cors({origin: (origin, callback) => {
    callback(null, true)
}}))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

app.use('/api', apiRoutes)

startServer()