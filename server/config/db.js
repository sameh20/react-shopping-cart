 const mongoose = require("mongoose")
 const connection = "mongodb://0.0.0.0/shopingcart";

  function runDB (){

    mongoose.connect(connection)
    .then(res=>console.log('connectted successfully'))
    .catch(err=>console.log(err))
    
    
  }

  module.exports = runDB