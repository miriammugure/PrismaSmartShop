import express from "express";
import productsRoutes from './products.route.js';

const app = express();
app.use(express.json());
app.use("/products",productsRoutes)


app.listen(3000, ()=>{
    console.log("application running on port 3000...");
})