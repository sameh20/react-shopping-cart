const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const productRouter  = require("./Routes/Route")
const ordeRouter  = require("./Routes/orderRoutes");
const runDB = require("./config/db");

const app = express()


app.use(bodyParser.json())
app.use("/",productRouter)
app.use("/",ordeRouter)

// run config
    const connection = "mongodb://0.0.0.0/shopingcart";
   runDB()

//order apis


// server
app.listen(5002,()=>{
    console.log("running on port 5002")
})