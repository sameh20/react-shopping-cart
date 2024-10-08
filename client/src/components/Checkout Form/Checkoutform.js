import React from 'react'
import "../../css/Checkout Form/Checkoutform.css"
import Input from '../Input/Input';
import Zoom from "react-reveal/Zoom";
import { words } from '../../words'


 function Checkoutform(props) {
  return (
    <>
      
      {props.showForm &&  <div className="checkout-form">
        <span className="close-icon" onClick={() => props.setShowForm(false)}> &times; </span> 
    <Zoom left>

    <form onSubmit={props.submitOrder}>
                        <Input
                            label={words.name}
                            type="text"
                            name="name"
                            onChange={props.handleChange}
                        />
                        <Input
                            label="Email"
                            type="email"
                            onChange={props.handleChange}
                            name="email"
                        />
                                            
                        <div>
                            <button type="submit"> {words.checkout} </button>
                        </div>
                    </form>
       </Zoom>
      </div>
 }
    </>
  )
}


export default Checkoutform