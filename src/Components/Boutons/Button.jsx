import React from 'react'

function Button({type, className,text, srcLeft, srcRight , onClick}) {


  return (
    <>
      {
       <button onClick={onClick} type={type} className={className}>{srcLeft?<img src={srcLeft} alt="" />:''} {text} {srcRight?<img src={srcRight} alt="" />:''} </button>
      }

    </>
  )
}

export default Button