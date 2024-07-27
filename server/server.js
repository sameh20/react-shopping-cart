const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const router  = require("./Routes/Route")
const app = express()


app.use(bodyParser.json())
app.use("/",router)

const connection = "mongodb://0.0.0.0/shopingcart";
mongoose.connect(connection)
.then(res=>console.log('connectted successfully'))
.catch(err=>console.log(err))






// server
app.listen(5002,()=>{
    console.log("running on port 5002")
})