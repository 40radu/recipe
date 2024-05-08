import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import Input from '../Components/Input/Input'
import Button from '../Components/Boutons/Button'
import axios from 'axios'

import UserService from '../Services/userService'
import { redirect } from 'react-router-dom'

export async function actionSign({ request }) {
  // const data = await request.formData();
  const data = Object.fromEntries(await request.formData());
  // console.log (request)

  try {
    // const data = await request.formData();

    const res = await UserService.createUser(data);

    const token = res.data.token;
    const refreshToken = res.data.refreshToken;
    const id = res.data.data._id;
    token ? localStorage.setItem("token", token) : "";  
    refreshToken ? localStorage.setItem("refreshToken", refreshToken) : "";
    id ? localStorage.setItem('id', id) : "";

    // const rest = await fetch("http://localhost:4400/api/user",{
    //   method:"POST",
    //   body: JSON.stringify(data)
    // })

    // const rest = axios.post ("http://localhost:4400/api/user",{ data })

    // console.log(data);

    // const res = await UserService.createUser(data);
    console.log(res)
    console.log(data)
    return redirect('/')
  } catch (error) {
    console.error(error.message)
  }





  // const rest = axios.post ("http://localhost:4400/api/user",{ data }).then( async (res)=>{
  //   const data = await res();
  //   console.log(rest)
  //   console.log(data)
  //   return data
  // }).catch((error)=>{
  //     console.log(error.message)
  // })

}

// async function exo () {
//   const rsult = await UserService.getAllUsers();
//   console.log (rsult)
// }


function Sign_up() {

  const [passType, setPassType] = useState('password');

  function handlePassword() {
    passType === 'password' ? setPassType('text') : setPassType('password')

  }
  return (
    <section className='container-signUp'>

      <div className="container-signUp__left"></div>
      <Form className="container-signUp__right" method='Post' action=''>
        <h2>Sign up for FOOD RECIPE</h2>
        <Link to={('')}><Button type={('button')} srcLeft={('/src/icons/google.svg')} text={('Connect with Google')} className={('btn-google')} /></Link>
        <p className='text'>or</p>
        <div className='cont-form'>
          <Input type={('text')} className={('input-gray firstN')} placeholder={('First Name')} name={('first-name')} />
          <Input type={('text')} className={('input-gray lastN')} placeholder={('Last Name')} name={('last-name')} />
          <Input type={('text')} className={('input-gray')} placeholder={('User-Name')} name={('username')} />
          <Input type={('email')} className={('input-gray')} placeholder={('E-mail')} name={('email')} />
          <div className='container-password'><Input type={(passType)} className={('input-gray')} placeholder={('Password')} name={('password')} />
            <div className='container-logo' onClick={handlePassword}></div>
          </div>

        </div>


        <p className='parag'> By creating an account, you agree to our <Link>Terms of use</Link> and <Link>Privacy policy </Link></p>
        <Button className={('btn-orange submit')} text={('Sign up')} type={('submit')} />
        <p className='link-login' onClick={actionSign}> Already have an account?  <Link to='/login'>Log in</Link>  </p>
        {/* <button type='submit' className='link-login' >Already have an account?  <Link to='/login'>Log in</Link>  </button> */}

        {/* <button onClick={exo}> Cliquez !!</button> */}

      </Form>



    </section>
  )
}

export default Sign_up