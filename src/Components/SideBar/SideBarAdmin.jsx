import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBarAdmin() {
    return (
        <div className="side-bar">
            <img src="/src/assets/Logo.png" alt="" />
            <ul className="side-bar__menu-list">
                <p>Main menu</p>
                <li> <img src="/src/icons/dashboard.svg" alt="" /> <p className="title">Dashboard</p>  </li>
                <li> <img src="/src/icons/dashboard.svg" alt="" /> <p className="title">Overview</p>   </li>
                <li> <img src="/src/icons/dashboard.svg" alt="" /> <p className="title">Recipes</p>   </li>

                <li className='with-chevron ingredient'>
                    <div className="left">
                        <img src="/src/icons/dashboard.svg" alt="" /> <p className="title">Ingredients</p>
                    </div>
                    <div className="right">
                        <img src="/src/icons/chevronDownBlack.svg" alt="" />
                    </div>
                </li>

                <li> <img src="/src/icons/dashboard.svg" alt="" /><p className="title">Analytics</p>   </li>

                <li className='with-chevron email'>
                    <div className="left">
                        <img src="/src/icons/dashboard.svg" alt="" /> <p className="title">Email</p>
                    </div>
                    <div className="right">
                        <p className="notif">10</p>
                        <img src="/src/icons/chevronDownBlack.svg" alt="" />
                    </div>
                </li>

                <li> <img src="/src/icons/dashboard.svg" alt="" /> <p className="title">Chat</p>   </li>
                {/* <li> <img src="/src/icons/user-admin.svg" alt="" /><p className="title">User</p>   </li> */}

                <li className='with-chevron user'>
                    <div className="left">
                        <img src="/src/icons/user-admin.svg" alt="" /> <p className="title">User</p>
                    </div>
                    <div className="right">
                        <p className="notif">New</p>
                        <div className='on-active'>

                        </div>
                    </div>
                </li>


                <li> <img src="/src/icons/dashboard.svg" alt="" /> <p className="title">Meal Planners </p> </li>
                <li> <img src="/src/icons/dashboard.svg" alt="" /> <p className="title">Support</p>  </li>
                <li> <img src="/src/icons/dashboard.svg" alt="" /> <p className="title">Settings</p>  </li>
                <p>Footer</p>
                <li> <img src="/src/icons/dashboard.svg" alt="" /> <p className="title">Term of use </p> </li>
                <li> <img src="/src/icons/dashboard.svg" alt="" /> <p className="title">Privacy Policy</p>  </li>
                <li> <img src="/src/icons/dashboard.svg" alt="" /> <p className="title">Logout</p>  </li>

            </ul>
        </div>
    )
}

export default SideBarAdmin