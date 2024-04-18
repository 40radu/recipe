import React from 'react'

function InputSearch({className , placeholder , id}) {
  return (
    <>
    <div className={className}>
        <label htmlFor={id} className={`${className}__logo-search`}></label>
        <input id={id} className={`${className}__input`} type="search" placeholder={placeholder}/>
    </div>
    </>
  )
}

export default InputSearch