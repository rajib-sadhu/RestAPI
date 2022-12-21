require('dotenv').config();

const express = require('express');
const app = express();
const connectDB =require("./db/connect");
const PORT = process.env.PORT || 5000;


const products_routes =require("./routes/products");


app.get("/",(req,res)=>{
    res.send("Welcome to Rajib Demo API Site..... please go to '/api/product'");
});

// middleware or to set router
app.use("/api/products/", products_routes);


const start = async ()=>{
    try{

        await connectDB(process.env.MONGODB_URL);

        app.listen(PORT , ()=>{
            console.log(` listing port...... ${PORT} `)
        })
    }
    catch(error){
        console.log("error.......... "+ error);
    }
}

start();