import React from 'react'

 function Input(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input  type={props.type}
        name={props.name} 
        onChange={props.onChange}
        required />
    </div>
    
  )
}

export default Input