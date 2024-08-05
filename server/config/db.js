 const mongoose = require("mongoose")
 const connectionString = "mongodb://0.0.0.0/shopingcart"; 

 //const url = process.env.MONGO_URI

  function runDB (){

    mongoose.connect(process.env.MONGO_URI ||  connectionString) 
    .then(res=>console.log('connectted successfully'))
    .catch(err=>console.log(err))
    
    
  }

  module.exports = runDB