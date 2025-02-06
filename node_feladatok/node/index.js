import express from 'express'

const app = express();
const PORT = 3000;

app.use('/', (req, res, next) => {
    console.log('App use 1.üzenet')
    next()
})

app.use('/', (req, res, next) => {
    console.log('App use 2.üzenet')
    next()
})

app.use('/', (req, res, next) => {
    console.log('App use 3.üzenet')
    res.send("Szia")
})

app.listen(PORT, ()=> 
    console.log(`Fut a szerver a http://localhost:${PORT} porton`))