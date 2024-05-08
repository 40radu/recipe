import React, { useEffect, useState } from 'react'
import Button from '../Components/Boutons/Button'
import Input from '../Components/Input/Input'
import InputSearch from '../Components/Input/InputSearch'
import { Form, Link, useLoaderData, useLocation } from 'react-router-dom'
import UserService from '../Services/userService'
import { redirect } from 'react-router-dom'
import axios from 'axios'


export async function actionLogin({ request }) {

  try {


    // const data = Object.fromEntries(await request.formData())
    // const result = await UserService.loginUsers(data);


    const datas = await request.formData();
    const allResult = Object.fromEntries(datas);
    console.log(allResult)
    const res = await UserService.loginUsers(allResult);


    if (res.status === 401) {
      localStorage.setItem('error', true)
    } else {
      const token = res.data.token;
      const refreshToken = res.data.refreshToken;
      const id = res.data.user._id;
      token ? localStorage.setItem("token", token) : "";
      refreshToken ? localStorage.setItem("refreshToken", refreshToken) : "";
      id ? localStorage.setItem('id', id) : "";

      if (res.data.user.avatar) {
        const avatar = res.data.user.avatar.nameHashed
        avatar ? localStorage.setItem('avatar', `http://localhost:4400/${avatar}`) : "";
        console.log('avatar oui')
      } else {
        console.log("avatar non")
      }
      

    }




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
    // console.log(token)
    // console.log(refreshToken)


    return redirect("/");
  } catch (error) {
    console.log(error)
  }
}


function Login() {


  const [loading, setLoading] = useState(false)

  const wrongCredential = localStorage.getItem('error');

  const [error, setError] = useState(wrongCredential)

  // wrongCredential?setError(wrongCredential):"";

  const [passType, setPassType] = useState('password');

  function handlePassword() {
    passType === 'password' ? setPassType('text') : setPassType('password')

  }
  function onClick () {
    console.log('bouton cliqué!')
    setLoading(true)
    //loading vita fa sur login ihan nef tokony rhf isakn misy requete
  }

  // useEffect(()=>{
  //     console.log('miova loading ')
  // }, [localStorage.getItem('loading')])

  return (
    <>
      <section className='container-login'>

        {loading && <p>Loading</p> }

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
          <p style={{ display: `${error ? "" : "none"}` }} className='login-error'>Incorrect password or username, please Check!</p>



          <Link className='link-password'>Forget Password?</Link>
          <Button className={('btn-orange submit')} text={('Login')} type={('submit')} onClick={onClick}/>
          <p className='parag'> Don’t have an account? <Link to='/sign'>Sign up</Link>  </p>

        </Form>
      </section>
    </>

  )
}

export default Login