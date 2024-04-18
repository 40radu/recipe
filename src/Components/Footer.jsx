import React from 'react'
import Input from './Input/Input'
import Button from './Boutons/Button'
import { Form } from 'react-router-dom'
function Footer() {
    return (
        <footer className='footer'>

            <div className="cont-left">

                <div className="top">
                    <p>Story Connected :</p>
                    <div className="social">
                        <img src="/src/icons/facebook.svg" alt="" />
                        <img src="/src/icons/instagram.svg" alt="" />
                        <img src="/src/icons/social-logo-heart.svg" alt="" />
                        <img src="/src/icons/twitter.svg" alt="" />
                    </div>
                </div>

                <Form className="bottom">
                    <p>Subscribe to our Newsetter</p>
                    <Input type={('text')} placeholder={('Email')} className={('input-orange')} name={('email')}/>
                    <Button text={('Subscribe')} type={('submit')} className={('btn-orange')} />
                </Form>
            </div>

            <div className="cont-right">

                <ul className="left">
                    <li>Home</li>
                    <li>RecipeGs</li>
                    <li>About us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of service</li>
                    <li> sitemap</li>
                    <li>Contact us</li>
                    <li> Blog</li>
                    <li> Career</li>
                </ul>
                <ul className="center">
                    <li>Dinner</li>
                    <li>Meals</li>
                    <li>Ingredients</li>
                    <li>Product vetting</li>
                    <li>Occasions</li>
                    <li>Cuisines</li>
                    <li>KItchen Tips</li>
                    <li>News</li>
                    <li>Home</li>
                </ul>

                <ul className="right">
                    <li >Forum</li>
                    <li >Questions/Answer</li>

                </ul>

            </div>

            <img src="/src/assets/Logo.png" alt=""  className='logo'/>

        </footer>
    )
}

export default Footer