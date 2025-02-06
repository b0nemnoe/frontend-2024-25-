import express, { Router } from 'express';

const nodejsRoutes = express.Router();

nodejsRoutes.use("/nodejs", (req, res) => {
    res.send("<h1>A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.</h1>")
})

export default nodejsRoutes