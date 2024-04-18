import React from 'react'
import CardPrimary from '../Components/Cards/CardPrimary'
import { Form, NavLink } from 'react-router-dom'
import CardCircle from '../Components/Cards/CardCircle'
import Input from '../Components/Input/Input'
import Button from '../Components/Boutons/Button'
import CardCollection from '../Components/Cards/CardCollection'
import Footer from '../Components/Footer'

function Home() {
  return (<>
    <section className='hero'>
      <div className="hero__left"></div>
      <div className="hero__right">
        <p className="descri"><img src="/src/icons/stat.svg" alt="" /> 85% would make this again </p>
        <h2>Easy cheesecake</h2>
        <p className="parag">Inspired by Cheesecake Factory, this New York-style cheesecake is rich, dense yet creamy and not overly sweet</p>
        <img className='btn-discover' src="/src/icons/chevron-right.svg" alt="" />
      </div>
    </section>

    {/* <CardPrimary src={('/src/assets/cheese-burger.jpg')} className={('btn-publics')} text={('Public')} title={('Cheese burger')}/> */}

    <section className='eat-type'>
      <div className="side-bar">
        <h3>Filter Recipes</h3>
        <div className="container-list">
          <h2>Diet</h2>
          <ul>
            <li> <NavLink>Dairy free</NavLink></li>
            <li>  <NavLink>Egg free</NavLink> </li>
            <li>  <NavLink>Sugar free</NavLink></li>
            <li>  <NavLink>Glutten free</NavLink></li>
          </ul>
        </div>

        <div className="container-list">
          <h2>Allergies</h2>
          <ul>
            <li> <NavLink>Glutten</NavLink></li>
            <li>  <NavLink>Legme</NavLink> </li>
            <li>  <NavLink>Fruite</NavLink></li>
            <li>  <NavLink>Grain</NavLink></li>
          </ul>
        </div>

        <div className="container-list">
          <h2>Cuisines</h2>
          <ul>
            <li> <NavLink>Asian</NavLink></li>
            <li>  <NavLink>Italian</NavLink> </li>
            <li>  <NavLink>Mexican</NavLink></li>
            <li>  <NavLink>Thai </NavLink></li>
          </ul>
        </div>

        <div className="container-list">
          <h2>Goals</h2>
          <ul>
            <li> <NavLink>Wheight loss</NavLink></li>
            <li>  <NavLink>Freshness</NavLink> </li>
            <li>  <NavLink>Activeness</NavLink></li>
            <li>  <NavLink>Rich nutritions </NavLink></li>
          </ul>
        </div>
      </div>

      <div className="right">
        <div className="top">
          <h4>Super Delicious</h4>
          <div className="cont-card">
            <CardPrimary src={('/src/assets/cheese-burger.jpg')} className={('btn-publics')} text={('Public')} title={('Cheese burger')} />
            <CardPrimary src={('/src/assets/cheese-burger.jpg')} className={('btn-publics')} text={('Public')} title={('Mac & Cheese')} />
            <CardPrimary src={('/src/assets/cheese-burger.jpg')} className={('btn-private')} text={('Private')} title={('Salad caesar with chicken')} />
          </div>
        </div>

        <div className="bottom">
          <h4>Super Delicious</h4>
          <div className="cont-card">
            <CardPrimary src={('/src/assets/cheese-burger.jpg')} className={('btn-publics')} text={('Public')} title={('Cheese burger')} />
            <CardPrimary src={('/src/assets/cheese-burger.jpg')} className={('btn-publics')} text={('Public')} title={('Mac & Cheese')} />
            <CardPrimary src={('/src/assets/cheese-burger.jpg')} className={('btn-private')} text={('Private')} title={('Salad caesar with chicken')} />
          </div>
        </div>
      </div>
    </section>

    {/* <CardCircle src={('/src/assets/pasta.jpg')} title={("Pasta")}/> */}

    <section className='categories'>
      <h4>Popular categories</h4>
      <div className="list-catg">
        <CardCircle src={('/src/assets/pasta.jpg')} title={("Pasta")} />
        <CardCircle src={('/src/assets/pasta.jpg')} title={("Pizza")} />
        <CardCircle src={('/src/assets/pasta.jpg')} title={("Vegan")} />
        <CardCircle src={('/src/assets/pasta.jpg')} title={("Dessert")} />
        <CardCircle src={('/src/assets/pasta.jpg')} title={("Smoothie")} />
        <CardCircle src={('/src/assets/pasta.jpg')} title={("Breakfast")} />
        <CardCircle src={('/src/assets/pasta.jpg')} title={("Dinner")} />
      </div>
    </section>

    <section className='speed-contact'>

      <div className="cont-left">
        <img src="/src/assets/img-pub1.png" alt="" />
        <img src="/src/assets/img-pub2.png" alt="" />
      </div>
      <div className="cont-right">

        <div className="descri">
          <h4>Get the recipe book!!!</h4>
          <p>A recipe book , guiding both novice and experienced cooks through the art of preparing delightful dishes.
            <br /> <br /></p><p>Or contact us  :+854 745 963</p>

        </div>

        <Form className='contact-zone'>
          <Input type={('text')} placeholder={('Email')} className={('input-orange')} name={('email')} />
          <Button text={('Get')} type={('submit')} className={('btn-orange')} />

        </Form>
      </div>
    </section>

    <section className='collection'>
      <h4>Hand-Picked Collections</h4>
      <div className="cont-list">
        <CardCollection title={"Sushi combos for your Next Party"} text={('156recipes')} src={('/src/assets/collection-img1.png')} />
        <CardCollection title={"Everything bagels"} text={('156recipes')} src={('/src/assets/collection-img1.png')} />

      </div>

      <div className="cont-list">
      <CardCollection title={"Everything bagels"} text={('156recipes')} src={('/src/assets/collection-img1.png')} />

        <CardCollection title={"Sushi combos for your Next Party"} text={('156recipes')} src={('/src/assets/collection-img1.png')} />

      </div>

      <div className="cont-list">
        <CardCollection title={"Sushi combos for your Next Party"} text={('156recipes')} src={('/src/assets/collection-img1.png')} />
        <CardCollection title={"Everything bagels"} text={('156recipes')} src={('/src/assets/collection-img1.png')} />

      </div>
    </section>

    {/* <CardCollection title={"Sushi combos for your Next Party"} text={('156recipes')} src={('/src/assets/collection-img1.png')}/> */}

      <section className='recipe'>
        <h4>Latest recipe</h4>

        <div className="cont-list">
          <img src="/src/icons/prev-recipe.svg" alt="" className='btn-prev'/>
          <img src="/src/assets/recipe1.png" alt="" />
          <img src="/src/assets/recipe1.png" alt="" />
          <img src="/src/assets/recipe1.png" alt="" />
          <img src="/src/assets/recipe1.png" alt="" />
          <img src="/src/icons/next-recipe.svg" alt="" className='btn-next'/>
        </div>

      </section>

      <Footer/>
  </> 
  )
}

export default Home