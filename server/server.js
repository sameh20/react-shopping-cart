require("dotenv").config() 
const express = require("express");
const bodyParser = require("body-parser")
const productRouter  = require("./Routes/Route")
const ordeRouter  = require("./Routes/orderRoutes");
const runDB = require("./config/db");
console.log(process.env.NODE_ENV)

const app = express()


app.use(bodyParser.json()) 
// config 
//mongodb+srv://samehaboelmagd49:<password>@react.df5qyxc.mongodb.net/
runDB()

app.use("/",productRouter)
app.use("/",ordeRouter)

// run config
   // const connection = "mongodb://0.0.0.0/shopingcart";

//order apis
if(process.env.NODE_ENV ==="production"){
    app.use("/",express.static('public'))
    app.get("/",(req,res)=>res.sendFile(__dirname + '/public/index.html'))
}else{
    app.get('/',(req,res)=>{
        res.send("api is loading")
    })
}

// server
const PORT = process.env.PORT
app.listen(PORT || 5002,()=>{
    console.log("running on port 5002")
})