import React from 'react'
import InputSearch from '../Input/InputSearch'
function UserAdmin() {
    return (
        <>
            <section className='user-admin'>
                <div className="top">
                    <div className="left">
                        <h3 className='title'>Users</h3>
                        <p className="descri">All users</p>
                    </div>
                    <div className="right">
                        <InputSearch className={('input-search-white')} placeholder={('Search')} />
                        <img src="/src/icons/admin-dash.svg" alt="" className='dashboard' />
                        <img src="/src/icons/admin-other-menu.svg" alt="" />
                        <button className='new-user'>
                            <img src="/src/icons/user-admin-white.svg" alt="" />
                            <p>New Users</p>

                        </button>
                    </div>
                </div>
                <div className="bottom">
                    <div className="card-profile">

                        <div className="btn-more">
                            <img src="/src/icons/more-info.svg" alt="" />
                        </div>

                        <div className="pict">
                            <img src="/src/assets/user-img.png" alt="" />
                            <p className="name">John Doe</p>
                        </div>

                        <div className="email">
                            <img src="/src/icons/email-user.svg" alt="" />
                            <p>Marthin5@gmail.com</p>
                        </div>

                        <div className="phone-number">
                            <img src="/src/icons/contact.svg" alt="" />
                            <p>
                                +752 456 963
                            </p>
                        </div>

                    </div>
                </div>
            </section>



        </>
    )
}

export default UserAdmin