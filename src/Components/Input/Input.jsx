import React from 'react'

function Input({type, name, placeholder, className}) {
  return (
    <input type={type} name={name} placeholder={placeholder} className={className}/>
  )
}

export default Input