import React from 'react'
import InputSearch from '../Input/InputSearch'
function NavBarAdmin() {
    return (
        <>
            <section className="nav-admin">
                <InputSearch className={('input-search-orange')} placeholder={('Search')} />
                <p className='other-menu'>Others menu</p>
                <div className="alert">
                    <img src="/src/icons/notif-admin.svg" alt="" />
                    <img src="/src/icons/alert-admin.svg" alt="" />
                    <p>Allergic alert</p>
                </div>
                <div className="profile">
                    <img src="/src/assets/naruto.png" alt="" className='pict-profile' />
                    <div className="descri">
                        <p className="name">
                            John Doe
                        </p>
                        <p className='skill'>
                            Super Admin
                        </p>
                    </div>
                    <img src="/src/icons/chevronDownBlack.svg" alt="" className='icon'/>
                </div>
            </section>
        </>
    )
}

export default NavBarAdmin