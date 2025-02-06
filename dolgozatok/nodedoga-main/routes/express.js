import express from 'express'

const expressRoutes = express.Router();

expressRoutes.use("/express", (req, res) => {
    res.send("<h1>Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.</h1>")
})

export default expressRoutes