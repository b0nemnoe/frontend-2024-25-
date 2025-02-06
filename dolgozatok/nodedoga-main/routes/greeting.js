import express from 'express'

const greetingRoutes = express.Router();

greetingRoutes.use("/greeting", (req, res) => {
    res.send("<h1>Hello, Németh Noel</h1>")
})

export default greetingRoutes