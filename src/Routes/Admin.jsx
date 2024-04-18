import React from 'react'
import NavBarAdmin from '../Components/NavBar/Nav-bar-Admin'
import SideBarAdmin from '../Components/SideBar/SideBarAdmin'
import { Outlet } from 'react-router-dom'
function Admin() {
    return (

        <section className='cont-admin'>
            <SideBarAdmin />


            <section className='right'>
                <NavBarAdmin />
                <Outlet />
            </section>

        </section>

    )
}

export default Admin