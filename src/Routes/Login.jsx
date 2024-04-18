import React, { useState } from 'react'
import Button from '../Components/Boutons/Button'
import Input from '../Components/Input/Input'
import InputSearch from '../Components/Input/InputSearch'
import { Form, Link } from 'react-router-dom'
import UserService from '../Services/userService'
import { redirect } from 'react-router-dom'
import axios from 'axios'


export async function actionLogin({ request }) {

  try {
    // const data = Object.fromEntries(await request.formData())
    // const result = await UserService.loginUsers(data);

    const datas = await request.formData();
    const allResult = Object.fromEntries(datas);
    const res = await UserService.loginUsers(allResult);

    // const rest = await fetch('http://localhost:4400/api/user/login', {
    //   headers: {"Content-Type": "application/json"},
    //   method: "POST",
    //   body: JSON.stringify(allResult)
    // }) Mande fa tsy hitan axios interceptor

    // const rest =await axios.post('http://localhost:4400/api/user/login', allResult)

    // // console.log(resp);
    // const token = resp.data.token;
    // const refreshToken = resp.data.refreshToken;
    // // const {pathname}= useLocation()

    // token ? localStorage.setItem("token", token) : "";
    // refreshToken ? localStorage.setItem("refreshToken", token) : "";

    // console.log(rest)
    console.log(res)

    return redirect("/");
  } catch (error) {
    console.log(error)
  }
}


function Login() {

  const [passType, setPassType] = useState('password');

  function handlePassword() {
    passType === 'password' ? setPassType('text') : setPassType('password')

  }

  return (
    <>
      <section className='container-login'>

        <div className="container-login__left"></div>

        <Form className="container-login__right" method='POST' action=''>

          <h2>Welcome Back</h2>
          <Link to=''><Button type={('button')} srcLeft={('/src/icons/google.svg')} text={('Connect with Google')} className={('btn-google')} />
          </Link>
          <p className='text'>or</p>
          <Input type={('text')} className={('input-gray')} placeholder={('Username')} name={('username')} />

          <div className='container-password'><Input type={(passType)} className={('input-gray')} placeholder={('Password')} name={('password')} />
            <div className='container-logo' onClick={handlePassword}></div>
          </div>
          <Link className='link-password'>Forget Password?</Link>
          <Button className={('btn-orange submit')} text={('Login')} type={('submit')} />
          <p className='parag'> Don’t have an account? <Link to='/sign'>Sign up</Link>  </p>

        </Form>
      </section>
    </>

  )
}

export default Login