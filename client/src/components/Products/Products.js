import React,{useEffect, useState} from 'react';
import "../../css/Products/Products.css"
import ProductModal from './ProductModal';
import {connect} from 'react-redux'
import Bounce from 'react-reveal/Bounce';
import { fetchProducts } from '../../store/action/products';
import { addToCart } from '../../store/action/cart';



function Products(props) {
const [product, setProduct] = useState("")

const openModal = (product)=>{
  setProduct(product)
}
const closeModal =()=>{
  setProduct(false)
}
 useEffect(()=>{
  props.fetchProducts()
 },[])
  return (
    <Bounce left cascade>
    <div className='products-wrapper'>
          { props.products && props.products.length ? props.products.map(product=>(
              <div className='product-item' key={product.id}>
                <a href='#' onClick={()=>openModal(product)} >
               <img src={product.imageUrl} alt={product.title}/>
               </a>
               <div className='product-desc'>
                   <p>{product.title} </p>
                   <span> $ {product.price} </span>
               </div>
               <button onClick={()=>props.addToCart(product)}>Add to cart</button>
              </div>
                  
          )): "Loading"}
       <ProductModal product={product} closeModal={closeModal} />
      
    </div>
    </Bounce>
  )
}
export default connect((state)=>{
return {products:state.products.filterProducts}
},{fetchProducts,addToCart})(Products)