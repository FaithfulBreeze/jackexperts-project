import express from 'express'
import cors from 'cors'
import apiRoutes from './routes/api'
import cookieParser from 'cookie-parser'
import { startServer } from './services/startServer'

export const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())
app.use((req, res, next) => {
    console.log(req.headers)
    next()
})
app.use('/', apiRoutes)

startServer()