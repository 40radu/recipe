import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import { useLocation } from 'react-router-dom'
import Footer from '../Components/Footer'
import axiosInstance from '../Services/axios'
import Login from './Login'

function Root() {

    const {pathname}=useLocation();

    // axiosInstance.interceptors.response.use ((res)=>{
    //     if (res.)
    // })


    // useEffect (()=>{
    //             console.log(pathname)
    // },[])
    return (
        // <div>
            
        //     <Link to="/courses">Course</Link>
        //     <Link to="/about">About</Link>
        //     <Link to="/login">login</Link>


        //     <Outlet/>
        // </div>
        <>
        {/* {pathname==="/admin"?"":<NavBar  barSearch={('true')} login={('true')} sign={('true')} account={('true')}/>} */}

        {localStorage.getItem('token')? <NavBar barSearch={('true') }  login={('false')} sign={('false')} logout={('true')} account={('true')}/>:
        <NavBar  barSearch={('true')} login={('true')} sign={('true')}/>}

        <Outlet />

        {pathname==="/categories"?<Footer/>:""}
        

         {/* { false && <Footer/>} */}
        </>

    )
}

export default Root