import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Boutons/Button'
import InputSearch from '../Input/InputSearch'
import Input from '../Input/Input'
import { useNavigate } from 'react-router-dom'

function NavBar({ barSearch, login, sign, account, notif, logout, connected }) {

    const navigate = useNavigate()
    const avatar = localStorage.getItem('avatar')

    function logOut (){
        localStorage.clear()

        console.log("mande le remove");
        navigate('/login')
        console.log('après anle navigate')
    }



    return (

        <nav className={`nav-container ${connected == 'true' ? 'connected' : ''}`} >
            <div className="logo">

            </div>
            <ul className='nav-links'>
                <li className='nav-links__link'><NavLink to="/" >Home</NavLink></li>
                <li className='nav-links__link'><NavLink to="/categories" >Categories <div></div></NavLink></li>
                <li className='nav-links__link'><NavLink to="/meal" >Meal Planners</NavLink></li>
                <li className='nav-links__link'><NavLink to="/courses" >Courses</NavLink></li>
                <li className='nav-links__link'><NavLink to="/about" >About us</NavLink></li>
                <li className='nav-links__link'><NavLink to="/contact" >Contact</NavLink></li>
            </ul>



            <div className="section-right">
                {barSearch == 'true' ? <InputSearch className={(`input-search-orange`)} placeholder={('Search ...')} id={('search')}/> : ""}
                {login == 'true' ?
                    <NavLink to="/login" ><Button type={('button')} className={('btn-orange')} text={('Login')} /> </NavLink>

                    : ""}
                {sign == 'true' ?
                    <NavLink to="/sign" ><Button type={('button')} className={('btn-white')} text={('Sign up')} /> </NavLink>

                    : ""}
                {/* {logout == "true" ? <div onClick={logOut}><Button type={('button')} on text={('Log out')} className={('btn-log-out')} /></div> : ""} */}
                {logout == "true" ? <Button type={('button')} on text={('Log out')} className={('btn-log-out')} onClick={logOut}/> : ""}

                {account == 'true' ? <NavLink to="profile"> <img src={avatar} className='cont-profile' ></img> </NavLink>: ""}
                {notif == 'true' ? <img src="/src/icons/notif.svg" ></img> : ""}

            </div>

        </nav>


    )
}

export default NavBar