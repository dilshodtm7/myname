import express from 'express'
import { routes } from './routes/routes.js'
import cors from 'cors'

const app = express()


const PORT = 9090

app.use(cors())
app.use(express.json())
app.use('/', routes)

app.listen(PORT, console.log(`Server running with ${PORT} PORT` ))
