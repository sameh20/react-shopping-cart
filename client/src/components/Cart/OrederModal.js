import React from 'react';
import Modal from 'react-modal';

 function OrederModal(props) {
    const {order,closeModal,cartItems} = props
  return (
   <>
   {order &&  <Modal isOpen={order} onRequestClose={closeModal}>
    <span className='close-icon' onClick={closeModal}>&times;</span>
<div className='order-info'>
<p className='alert-success'>Order Done Successfully</p>
<table>
    <tr>
        <td>Name : </td>
        <td>{order.name}</td>

    </tr>
    <tr>
        <td>Email : </td>
        <td>{order.email}</td>
    </tr>
    <tr>
        <td>Total : </td>
        <td>{cartItems.reduce((a,p)=>{
            return a+p.price
        },0)}</td>
    </tr>
    <tr>
        <td>Selected Products</td>
        <td> {props.cartItems.map( p =>(
            <div className='cart-data'>
                <p>Number of this product : {p.Qty}</p>
                <p>Title  of this product : {p.title}</p>

            </div>
       ))}</td>
        

    </tr>
</table>

</div>
</Modal>}
   </>
  )
}
export default OrederModal