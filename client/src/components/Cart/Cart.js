import React, { useState } from 'react'
import "../../css/Cart/Cart.css"
import Checkoutform from '../Checkout Form/Checkoutform';
import Bounce from 'react-reveal/Bounce';


 function Cart(props) {
  const [showForm,setShowForm]= useState(false)
  const [value,setValue] = useState('')
  const handleChange = (e)=>{
  setValue((preValue)=>[{...preValue,[e.target.name]:e.target.value}])
  }
  const submitOrder =(e)=>{
    e.preventDefault()
    const order = {
      name:value.name,
      email:value.email
    }
    console.log(order)
  }
  return (
   
      <div className='cart-wrapper'>
        <div className='cart-title'>{props.cartItems.length == 0 ? 'Empty Cart': <p>There are {props.cartItems.length} products</p>}</div>
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
         <button onClick={()=>props.removeItem(item)}>Remove</button>

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
       
     <Checkoutform showForm={showForm} handleChange={handleChange} submitOrder={submitOrder} setShowForm={setShowForm} />

       
    </div>
  )
}
export default Cart