import express from 'express'

const router = express.Router()

router.get("/hello", (req, res) => {
    res.json({msg: "get movie route"})
})
router.post("/hello", (req, res) => {
    res.json({msg: "post movie route"})
})
router.put("/hello", (req, res) => {
    res.json({msg: "put  movie route"})
})
router.delete("/hello", (req, res) => {
    res.json({msg: "delete movie route"})
})


export default router



