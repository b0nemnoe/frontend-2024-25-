import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const indexRoutes = express.Router();
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

indexRoutes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"))
})

export default indexRoutes