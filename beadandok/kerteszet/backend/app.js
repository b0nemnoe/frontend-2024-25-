import express from 'express';
import cors from 'cors';
import { initializeDatabase } from './database.js';
import plantsRoutes from './routes/plants.js';


const app = express()

app.use(cors())
app.use(express.json())
app.use("/plants", plantsRoutes)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send({message: err.message})
})

async function startServer() {
    await initializeDatabase()
    app.listen(3000, () => {
        console.log(`Server is running http://localhost:3000`)
    })
}

startServer()