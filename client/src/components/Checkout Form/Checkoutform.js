import React from 'react'
import "../../css/Checkout Form/Checkoutform.css"
import Input from '../Input/Input';
import Zoom from "react-reveal/Zoom"

 function Checkoutform(props) {
  return (
    <>
      
      {props.showForm &&  <div className="checkout-form">
        <span className="close-icon" onClick={() => props.setShowForm(false)}> &times; </span> 
    <Zoom left>

       <form  onSubmit={props.submitOrder}>
       <Input label='Name'
               type='text'
               required
               onChange ={props.handleChange}
                  name ='name' />
        <Input label='Email'
               type='email'
               required
               onChange ={props.handleChange}
               name ='email' />
        
        <div>
          <button type='submit' onClick={()=>props.setShowForm(true)}>Checkout</button>
        </div>
       </form>
       </Zoom>
      </div>
 }
    </>
  )
}


export default Checkoutform