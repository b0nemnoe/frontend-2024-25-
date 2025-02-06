import express from 'express'
import userRoutes from './routes/user.js'

const app = express();
const PORT = 3000;

app.use(userRoutes)

app.use((err, req,res,next) => {
    if (err)
    {
        console.error(err.message);
        res.status(err.status || 500).send('Sikertelen kérés');
    }
});


app.listen(PORT, ()=> 
    console.log(`Fut a szerver a http://localhost:${PORT} porton`))