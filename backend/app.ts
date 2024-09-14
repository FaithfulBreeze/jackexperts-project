import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import config from './config/dotenv'
import apiRoutes from './routes/api'
import { startServer } from './services/startServer'

config()
export const app = express()

app.use(cors({origin: '*'}))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

app.use('/', apiRoutes)

startServer()