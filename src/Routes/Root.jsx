import React, { useEffect, useState } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import { useLocation } from 'react-router-dom'
import Footer from '../Components/Footer'
import axiosInstance from '../Services/axios'
import Login from './Login'
import NavBarAdmin from '../Components/NavBar/Nav-bar-Admin'
// import { useLocation } from 'react-router-dom'



function Root() {

    const {pathname}=useLocation();

    return (
        <>
        {/* {pathname==="/admin"?"":<NavBar  barSearch={('true')} login={('true')} sign={('true')} account={('true')}/>} */}
        

        {localStorage.getItem('token')? <NavBar barSearch={('true') }  login={('false')} sign={('false')} logout={('true')} account={('true')}/>:
        <NavBar  barSearch={('true')} login={('true')} sign={('true')}/>}
        
        <Outlet />
        {loading && <p>loading...</p>}
        {pathname==="/categories"?<Footer/>:""}

        </>

    )
}

export default Root