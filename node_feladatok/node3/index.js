import express from 'express'
import adminRoutes from './routes/admin.js'
import productRoutes from './routes/product.js'

const app = express();
const PORT = 3000;

app.use('/api/v1', adminRoutes, productRoutes)


app.listen(PORT, ()=> 
    console.log(`Fut a szerver a http://localhost:${PORT} porton`))