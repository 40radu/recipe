import React from 'react'

function InputPlanners({ src , name}) {
  return (
    <div className='input-planners'>
        <input type="text" name={name}/>
        <img src={src} alt="" />
    </div>
  )
}

export default InputPlanners