import React from 'react'

function Input({type, name, placeholder, className , onChange, onClick}) {

  return (
    <input type={type} name={name} placeholder={placeholder} className={className} onChange={onChange} onClick={onClick}/>
  )
}

export default Input