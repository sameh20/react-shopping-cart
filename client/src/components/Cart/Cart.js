import React, { useState } from 'react'
import "../../css/Cart/Cart.css"
import Checkoutform from '../Checkout Form/Checkoutform';
import Bounce from 'react-reveal/Bounce';
import { connect } from "react-redux";
import { removeCart } from '../../store/action/cart';
import OrederModal from './OrederModal';
import { clearOrder, createOrder } from '../../store/action/orders';



function Cart(props) {
    
  const [showForm, setShowForm] = useState(false);
  const [order , setOrder] = useState(false);
  const [value, setValue] = useState("")

  const submitOrder = (e) => {
      e.preventDefault();
      const order = {
          name : value.name,
          email: value.email
      }
    props.createOrder(order);
  }

  const closeModal = () => {
      props.clearOrder();
      setShowForm(false)
  }

  const handleChange = (e) => {
      setValue( (prevState) => ({ ...prevState, [e.target.name]: e.target.value}) )
  }
  return (
   

      <div className='cart-wrapper'>
        <div className="cart-title"> {props.cartItems.length === 0 ? 'Cart Empty' : <p>
          There is :{props.cartItems.length} products in cart </p>} </div>
          {/*modal */}
          <OrederModal cartItems ={props.cartItems} order ={props.order} closeModal={closeModal} />
        <Bounce bottom cascade>
        <div className='cart-items'>
       {props.cartItems.map(item=>(
         <div className='cart-item' key={item.id}>
         <img src={item.imageUrl} alt={item.title}/>
         <div className='cart-info'>
            <div>
             <p>{item.title}</p>
             <p>Qty {item.Qty}</p>
             <p> ${item.price}</p>
             </div>
         <button onClick={()=>props.removeCart(item)}>Remove</button>

         </div>
    
     </div>
         ))}
         
        </div>
        </Bounce>
        {props.cartItems.length !== 0 && (
          <div className='cart-footer'>
          <div className='total'>Total : {props.cartItems.reduce((acc,p)=>{
              return acc +p.price
          },0)} $</div>
          <button onClick={()=>setShowForm(true)}>Select Product</button>
        </div>
   
    
       )}
       {/* checkout form */} 
       
     <Checkoutform 
      showForm={showForm}
      setShowForm={setShowForm}
       handleChange={handleChange} 
      submitOrder={submitOrder}
      closeModal={closeModal}/>
      

       
    </div>
  )
}
export default connect((state) =>{
  return {
      order :state.order.order,
      cartItems: state.cart.cartItems
  }
}, {removeCart,createOrder,clearOrder} )(Cart)

