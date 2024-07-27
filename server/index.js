const express = require("express");
const app = express()
const mongoose = require("mongoose");


mongoose.connect('mongodb://0.0.0.0/testdb')
.then(res=>console.log('connectted'))
.catch(err=>console.log(err))


// create model
const Product = mongoose.model('product', new mongoose.Schema({
        id:String,
        title:String,
         imageUrl:String,
         desc:String,
         price:Number,
         sizes:[String]

}))


app.get('/api/products',async(req,res)=>{
    const products = await Product.find();
      res.send(products)
})

app.post('/api/products',async(req,res)=>{
    const newProduct = new Product(req.body);
    const savedP = await newProduct.save()
     res.send(savedP)
})

app .delete('/api/products/:id', async(req,res)=>{
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct)
})

app.listen(5001,()=>{
    console.log("running on port 5001")
})