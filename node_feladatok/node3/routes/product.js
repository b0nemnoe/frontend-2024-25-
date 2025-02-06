import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('<h2>Root Page</h2>')
})

export default router





