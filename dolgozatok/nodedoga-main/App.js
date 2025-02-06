import express from 'express'
import bodyParser from 'body-parser'
import expressRoutes from './routes/express.js'
import nodejsRoutes from './routes/nodejs.js'
import greetingRoutes from './routes/greeting.js'
import indexRoutes from './routes/index.js'

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({extended: false}))

/*
app.get("/", (req, res) => {
    res.send("<h1>Hi, there</h1>")
})*/

app.get("/", indexRoutes)
app.get("/express", expressRoutes)
app.get("/nodejs", nodejsRoutes)
app.get("/greeting", greetingRoutes)


app.listen(PORT, () => console.log(`server runs on port localhost:${PORT}`))



