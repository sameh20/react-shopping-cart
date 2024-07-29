import { ADD_CART, REMOVE_CART } from "./types"

export const addToCart =(product)=>{
return (dispatch,getState)=>{
    const cartItems = getState().cart.cartItems
    const cartItemsClone = [...cartItems]
 let isProductExit= false
 cartItemsClone.forEach(p=>{
  if(p._id === product._id){
    p.Qty++
    isProductExit = true
  }
 })
 if(!isProductExit){
  cartItemsClone.push({...product,Qty:1})
}
dispatch({
    type:ADD_CART,
    data :{cartItems:cartItemsClone}
})
localStorage.setItem('cartItems',JSON.stringify(cartItemsClone))
}}
// removing cart items
export const removeCart = (product)=>{
    return(dispatch,getState)=>{
    const cartItems = getState().cart.cartItems
    const cartItemsClone = [...cartItems]
    const updatedProducts = cartItemsClone.filter(p=>p._id !== product._id)
    dispatch({
        type:REMOVE_CART,
        data:{
          cartItems :updatedProducts
        }
    })
localStorage.setItem('cartItems',JSON.stringify(updatedProducts))

    }
}