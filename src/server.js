import express from 'express'
import movieRoutes from './routes/movieRoutes.js'
import {config} from 'dotenv'
import { connectDB, disconnectDB } from './config/db.js'


const app = express()
config()
connectDB()

const PORT = 5001

app.get('/', (req, res) => {
    res.json({msg: "hello"})
})

app.use('/movies', movieRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

// handle unhandled promise rejectrions (e.g., database connection error) 
process.on('undandledRejection', (err) => {
    console.error("Unhandled rejection:", err);
    server.close(async () => {
        await disconnectDB()
        process.exit(1)
    })
})

// handle uncaught exception
process.on('uncoughtException', async (err) => {
    console.error("Uncought exception:", err);
        await disconnectDB()
        process.exit(1)
    })

// graceful shutdown
process.on('SIGTERM', () => {
    console.error("SIGTERM received, shutting down gracefully");
    server.close(async () => {
        await disconnectDB()
        process.exit(0)
    })
})