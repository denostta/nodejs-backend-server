import express from 'express'
import movieRoutes from './routes/movieRoutes.js'
import authRoutes from './routes/authRoutes.js'
import {config} from 'dotenv'
import { connectDB, disconnectDB } from './config/db.js'

config()
connectDB()
const app = express()
const PORT = process.env.PORT || 5001
//middleware for body parsing
app.use(express.json())


//API routes
app.use('/movies', movieRoutes)
app.use('/auth', authRoutes)

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

// handle unhandled promise rejections (e.g., database connection error) 
process.on('unhandledRejection', (err) => {
    console.error("Unhandled rejection:", err);
    server.close(async () => {
        await disconnectDB()
        process.exit(1)
    })
})

// handle uncaught exception
process.on('uncaughtException', async (err) => {
    console.error("Uncaught exception:", err);
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