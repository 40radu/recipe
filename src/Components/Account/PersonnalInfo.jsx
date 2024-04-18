import React from 'react'
import { Form } from 'react-router-dom'
import InputCourses from '../Input/InputCourses'
import Button from '../Boutons/Button'
function PersonnalInfo() {
    return (
        <>
            <div className='personnal-infos'>
                
                    <div className="left">
                        <h3>MY PERSONAL INFORMATION</h3>

                        <InputCourses placeholder={('Pseudo*')} src={('/src/icons/chevron-down-blue.svg')} name={('username')} />
                        <InputCourses placeholder={('FirstName')} name={('firstName')} />
                        <InputCourses placeholder={('LastName')} name={('lastName')} />
                        <InputCourses placeholder={('Birth date')} src={('/src/icons/chevron-down-blue.svg')} name={('birthDate')} />
                        <InputCourses placeholder={('Gender')} src={('/src/icons/chevron-down-blue.svg')} name={('gender')} />

                    </div>

                    <div className="bottom">


                        <InputCourses placeholder={('E-mail*')} src={('/src/icons/chevron-down-blue.svg')} name={('email')} />
                        <InputCourses placeholder={('Password*')} type={('password')} name={('password')} />
                        <InputCourses placeholder={('Adress')} name={('adress')} />
                        <InputCourses placeholder={('Postal code')} src={('/src/icons/chevron-down-blue.svg')} name={('postal')} />
                        <InputCourses placeholder={('Language')} src={('/src/icons/chevron-down-blue.svg')} name={('language')} />

                    </div>
          

               

            </div>
        </>
    )
}

export default PersonnalInfo