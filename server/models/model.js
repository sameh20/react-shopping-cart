const productSchema=require( "../Productschema/schema.js")
const mongoose = require("mongoose");


const Product = mongoose.model("product",productSchema)




module.exports = Product