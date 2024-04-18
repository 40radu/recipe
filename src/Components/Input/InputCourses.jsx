import React from 'react'

function InputCourses({ src, name , placeholder, type}) {
    return (
        <div className='input-courses'>
            <input type={`${!type?type:"text"}`} name={name} placeholder={placeholder}/>
            <img src={src} alt="" />
        </div>
    )
}

export default InputCourses