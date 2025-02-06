import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'

const router = express.Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

router.use(bodyParser.urlencoded({ extended: false }))


router.get('/', (req, res) => {
    console.log('App use 1.üzenet')
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

router.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'users.html'))
})

router.get('/create-user', (req, res) => {
    const userName = req.body.userName
    console.log(`POST üzenet:` + userName)
})

export default router