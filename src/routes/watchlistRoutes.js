import express from 'express'

const router = express.Router()
import {addToWatchlist} from "../controllers/watchlistController.js"
import { authMiddleware } from '../middleware/authMiddleware.js'


router.use(authMiddleware)
router.post("/", addToWatchlist)




export default router
