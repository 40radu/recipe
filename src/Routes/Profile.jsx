import React, { useState } from 'react'
import { Form, Link, Outlet, redirect } from 'react-router-dom'
import InputCourses from '../Components/Input/InputCourses'
import Button from '../Components/Boutons/Button'
import Footer from '../Components/Footer'
import UserService from '../Services/userService'
import axiosInstance from '../Services/axios'
import axios from 'axios'
import "react-profile/themes/dark"
import { openEditor } from 'react-profile'

export async function actionProfile({ request }) {
    try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        const id = {
            "id": localStorage.getItem('id')
        }

        const resp = await UserService.updateUser({
            ...data,
            ...id
        });

        console.log(resp);
        // console.log(request);
        // return resp;

        // console.log('mande le action profile');
        return null;
    } catch (error) {
        console.error(`ERROR : ${error.message}`)
    }
}


function Profile() {

    const avatar = localStorage.getItem('avatar')
    

    const [renderChild, setRenderChild] = useState(false);

    const [image, setImage] = useState('')

    const [handleBtnSubmit, setHandleBtnSubmit] = useState(false)

    const [filesDisplay, setFilesDisplay] = useState('none')

    function handleRender() {
        setRenderChild(!renderChild)
        //modified on 7/05
    }


  async  function handleChangeImage(e) {
        // const image = await openEditor({src:e.target.files[0], square:true}) 
        // // console.log(image.e.target.files[0])
        // console.log( image.editedImage.getBlob())
        // console.log(image?.editedImage)
        // console.log(e.target.files[0])
       
        // setImage(image?.editedImage?.getDataURL())
        //UNSUCCES



        // setImage(image)
        setImage(e.target.files[0])
    
        setHandleBtnSubmit(true)
        setFilesDisplay('flex')
    }

    async function handleClick() {

        try {

            const userId = localStorage.getItem('id')
            const formData = new FormData();
            formData.append("file", image);
            formData.append("userId", userId)
            const token = localStorage.getItem('token')

            console.log(formData)

            const rest = await axiosInstance.post("image", formData);
            //succes


            // const rest = await axios.post("http://localhost:4400/api/image",formData) succes

            // const rest = await fetch('http://localhost:4400/api/image', {
            //     method: 'POST',
            //     headers: {
            //         "Authorization": `Bearer ${token}`,
            //         // "Content-Type": "none",
            //         // "Content-Type": "multipart/form-data;Boundary",




            //     },
            //     body:formData
            // }).then((res)=>{
            //     return console.log(res)
            // }) succes

            console.log(rest)
            setFilesDisplay('none')
            setHandleBtnSubmit (false)
            
            const newImage =rest.data.image.nameHashed;
            // setNameHashed(rest.data.image.nameHashed)

            // return rest

            localStorage.setItem("avatar",`http://localhost:4400/${newImage}`);
            
            window.location.href = '/profile'


        } catch (error) {
            console.error(error)
        }

        // `http:localhost:4400/${nameHashed}`

    }

    return (
        <>
            <section className='profile-top'>
                
                <label htmlFor='file'  >
                    <img src={avatar} alt="" className="profile-top__pict"/>
                    {/* <img  alt="" className="profile-top__pict"/> */}

                   
                </label>
                <input id='file' type="file" onChange={handleChangeImage} name='file' style={{ display: filesDisplay, }} />
                {handleBtnSubmit && <Button text={'Envoyer'} type={'Submit'} className={'btn-orange'} onClick={handleClick} />}

                <p >My profil</p>
                {/* <input type="file" /> */}
                <div className="profile-top__descri">
                    <p>User Name</p>
                    
                    <p>Gender : Male/Female</p>
                    <p>Registered since : D/M/Y</p>

                </div>
            </section>

            <section className='profile-center'>
                <ul className="menu-bar" onMouseEnter={handleRender} onMouseLeave={handleRender}>
                    <li className="menu-bar__seen">
                        <div className="cont-icon"></div>
                        <p>Profil menu</p>
                    </li>

                    {renderChild && <>
                        <li className='link'>
                            <Link to="info" onClick={handleRender}>

                                <p>MY PERSONAL INFORMATION</p>
                                <div className="cont-icon"></div>

                            </Link>
                        </li>

                        <li className='link'>
                            <Link to="culinary" onClick={handleRender}>
                                <>
                                    <p>MY CULINARY PREFERENCIES</p>
                                    <div className="cont-icon"></div>
                                </>
                            </Link>
                        </li>

                        <li className="link">
                            <Link to="recipe" onClick={handleRender}>

                                <p>RECIPE</p>
                                <div className="cont-icon"></div>

                            </Link>
                        </li>

                        <li className="link">
                            <Link to="favorite_recipe" onClick={handleRender}>

                                <p>FAVORITE RECIPE</p>
                                <div className="cont-icon"></div>

                            </Link>
                        </li>

                    </>}


                </ul>

                <Form className="cont-children" action='' method='Put'>
                    <Outlet />
                    <Button className={('btn-orange')} text={('SAVE')} type={('submit')} />
                </Form>

            </section>

            <section className="profile-bottom">
                <p className="descri">
                    <a href="">Let’s Cook</a>data controller, collects this data in order to:
                    <br />
                    manage your account and allow you to benefit from the services to which it gives you access,
                    improve the quality of its services and develop new ones, provide the functionalities necessary
                    for the operation of its services and meet legal or regulatory obligations weighing on it and court
                    decisions,
                    <br />
                    to send you personalized commercial communications and measure their performance if you have consented
                    to thisand subject to your agreement in the <a href="">cookie configuration module</a> which you can withdraw
                    at any time, to reconcile this data with other data concerning you in order to enrich the profile on the basis of
                    which the content and advertisements are personalized and you display personalized content and advertisements. To f
                    ind out more about the management of your personal data and to exercise your rights, you can consult our
                    <a href="">personal data protection policy</a>.
                </p>

                <button type='button' className='btn-delete'> Delete my account </button>

                <a className="cookies-link">Cookies Settings</a>
            </section>


            <Footer />
        </>
    )
}

export default Profile
