import React from 'react'

function CardCollection({src , title , text }) {
  return (
    <div className='card-collection'>

        <img src={src} alt="" />
        <div className="cont-bottom">
            <h4>{title}</h4>
            <p className="descri">{text}</p>
        </div>
    </div>
  )
}

export default CardCollection