import React from 'react'

function CardCircle({src , title}) {
  return (
    <>
        <div className="card-circle">
            <img src={src} alt="" />
            <h4>{title}</h4>
        </div>
    </>
  )
}

export default CardCircle