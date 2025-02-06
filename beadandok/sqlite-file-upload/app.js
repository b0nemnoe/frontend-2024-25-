import cors from "cors";
import express from "express";
import productsRouter from "./routes/products.js";
import { initializeDB } from "./database.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use("/products", productsRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

const startServer = async () => {
    await initializeDB();
    app.listen(3000, () => console.log("Server is running on port 3000"));
};

startServer();
