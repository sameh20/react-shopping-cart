const productSchema=require( "../schema/productSchema.js")
const mongoose = require("mongoose");


const Product = mongoose.model("product",productSchema)


module.exports = Product