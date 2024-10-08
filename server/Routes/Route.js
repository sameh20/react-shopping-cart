const express = require("express")
const Product = require("../models/model")
const router  = express.Router()



router.get('/api/products',async(req,res)=>{
    const products = await Product.find();
      res.send(products)
})

router.post('/api/products',async(req,res)=>{
    const newProduct = new Product(req.body);
    const savedP = await newProduct.save()
     res.send(savedP)
})

router .delete('/api/products/:id', async(req,res)=>{
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct)
})


module.exports = router