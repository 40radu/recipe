import React, { useState } from 'react'
import Button from '../Boutons/Button'

function CardPrimary({src, title,className , text}) {

   

  return (


    <div className='card'>
        <img src={src} alt="" />
        <div className="rating">
            {[...Array(5)].map((element, index)=>{
                return(
                    <img key={index} src="/src/icons/star-orange.svg" alt="" />
                )
            })}
        </div>
        <h3> {title}</h3>
        <Button type={('button')} className={className} text={text}/>
    </div>
  )
}

export default CardPrimary