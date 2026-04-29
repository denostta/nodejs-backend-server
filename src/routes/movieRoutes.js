import express from 'express'

const router = express.Router()

router.get("/hello", (req, res) => {
    res.json({msg: "get movie route UPDATED"})
})
router.post("/hello", (req, res) => {
    res.json({msg: "post movie route UPDATED"})
})
router.put("/hello", (req, res) => {
    res.json({msg: "put  movie route UPDATED"})
})
router.delete("/hello", (req, res) => {
    res.json({msg: "delete movie route UPDATED"})
})


export default router



