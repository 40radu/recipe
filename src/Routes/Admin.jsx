import React, { useState } from 'react'
import NavBarAdmin from '../Components/NavBar/Nav-bar-Admin'
import SideBarAdmin from '../Components/SideBar/SideBarAdmin'
import { Outlet } from 'react-router-dom'
import { createContext } from 'react'

export const AdminContext = createContext();

function Admin() {

    const [data, setData] = useState('Ito ilay data ho ampesaina')
    return (

        <AdminContext.Provider value={data}>
            <section className='cont-admin'>
                <SideBarAdmin />


                <section className='right'>
                    <NavBarAdmin />
                    <Outlet />
                </section>

            </section>
        </AdminContext.Provider>

    )
}

export default Admin