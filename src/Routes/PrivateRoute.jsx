import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

function PrivateRoute() {
    // const auth = true;
    // const navigate = useNavigate()


//   return ( auth ? <Outlet/> : navigate ("/login")
  return (localStorage.getItem('token') ? <Outlet/> : <Navigate to="/login"/>

    
  )
}

export default PrivateRoute