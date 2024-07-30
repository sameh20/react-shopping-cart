const mongoose = require('mongoose')


const orderSchema =  new mongoose.Schema({
    name:String,
    email:String},
   { timstamps:true

})

module.exports = orderSchema