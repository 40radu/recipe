import React, { useEffect, useState } from 'react'
import InputSearch from '../Input/InputSearch'
import axiosInstance from '../../Services/axios'
import { useAsyncError, useLoaderData } from 'react-router-dom';
import { list } from 'postcss';
import { useContext } from 'react';
import { AdminContext } from '../../Routes/Admin';

export async function loaderAllUserAdmin() {

    try {
        // // const res = await axiosInstance.get('user');
        // const rest = await fetch ('http://localhost:4400/api/user')
        // const data = await rest.json()
        // // const allData = rest.data.data;
        // // console.log(allData)
        // console.log(data)
        // return data;

        // const rest = await fetch('http://localhost:4400/api/user');
        const rest = await axiosInstance.get('user');
        // const data = await rest.json()
        // console.log(rest)
        return rest;
    } catch (error) {
        console.log(error.message)
    }
}


function UserAdmin() {

    const message = useContext(AdminContext)

    const datas = useLoaderData();

    // const [base, setBase]=useState([data])

    // useEffect(()=>{
    //     console.log( data)

    // },[])   
    // const [data, setData] = useState([])

    if (!datas) {
        return <div>Loading ... </div>
        // }else {
        //     setData(datas)
    }

    console.log(datas.data.data)


    // if(!data){
    //     return <div>Loading ...</div>
    // }else {
    //     console.log('mande')
    // }

    return (
        <>
            <section className='user-admin'>
                <p>{`ouz izy oe ${message}`}</p>
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

                    {datas.data.data.map((element, index) => {
                        return (

                            <div key={index} className="card-profile">

                                <div className="btn-more">
                                    <img src="/src/icons/more-info.svg" alt="" />
                                </div>

                                <div className="pict">
                                    <img src="/src/assets/user-img.png" alt="" />
                                    <p className="name">{element.username}</p>
                                </div>

                                <div className="email">
                                    <img src="/src/icons/email-user.svg" alt="" />
                                    <p>{element.email}</p>
                                </div>

                                <div className="phone-number">
                                    <img src="/src/icons/contact.svg" alt="" />
                                    <p>
                                        +752 456 963
                                    </p>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </section>






        </>
    )
}

export default UserAdmin