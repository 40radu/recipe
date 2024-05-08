import React from 'react'
import Button from '../Components/Boutons/Button'
import CardPrimary from '../Components/Cards/CardPrimary'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'



function Courses() {

  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/courses" ? <>
        <section className='courses-hero'>
          <div className="descri">
            <div className="text">
              <h2>Cooking Lesson</h2>
              <p>Discover the pleasure of cooking with our experienced and passionate Chefs.</p>
            </div>
            <Button text={('Discover our Chefs')} className={('btn-orange')} />
          </div>
        </section>

        <section className='cont-courses'>
          <div className="side-bar">

            <div className="top">
              <Button className={('btn-orange no-radius')} srcRight={('/src/icons/diary.svg')} text={('Diary')} />
              <div className="rectangle"></div>
            </div>
            <div className="bottom">
              <h2>Filter Courses</h2>
              <h3>View all Cours</h3>
              <ul>
                <li>Asiatique</li>
                <li>BBQ</li>
                <li>Bakeries</li>
                <li>Super delicious</li>
                <li>Sweat food</li>
                <li>Culinary camp</li>
                <li>International cuisine</li>
                <li>Demonstration</li>
                <li>Cocktail</li>
                <li>Pastry</li>
                <li>Basic technique</li>
                <li>Themes</li>
                <li>Vegetarian</li>
                <li>Wines</li>
              </ul>
            </div>
          </div>

          <div className="cont-left">
            <div className="cont-left__top">
              <Link to={("create")}>
                <Button className={('btn-orange no-radius')} text={('Course creation')} type={('button')} srcRight={('/src/icons/more.svg')} />
              </Link>
              <div className="filter">
                <p>Sort by : Featured</p>
                <img src="/src/icons/chevron-down-blue.svg" alt="" />
              </div>
            </div>

            <div className="cont-left__bottom">
              <div className="cont-card">
                <CardPrimary src={('/src/assets/apricot-D.png')} title={('Apricot Danish')} text={('Public')} className={('btn-publics')} />
                <CardPrimary src={('/src/assets/apricot-D.png')} title={('Apricot Danish')} text={('Public')} className={('btn-publics')} />
                <CardPrimary src={('/src/assets/apricot-D.png')} title={('Apricot Danish')} text={('Public')} className={('btn-publics')} />
              </div>
              <div className="cont-card">
                <CardPrimary src={('/src/assets/apricot-D.png')} title={('Apricot Danish')} text={('Public')} className={('btn-publics')} />
                <CardPrimary src={('/src/assets/apricot-D.png')} title={('Apricot Danish')} text={('Public')} className={('btn-publics')} />
                <CardPrimary src={('/src/assets/apricot-D.png')} title={('Apricot Danish')} text={('Public')} className={('btn-publics')} />
              </div>
              <div className="cont-card">
                <CardPrimary src={('/src/assets/apricot-D.png')} title={('Apricot Danish')} text={('Public')} className={('btn-publics')} />
                <CardPrimary src={('/src/assets/apricot-D.png')} title={('Apricot Danish')} text={('Public')} className={('btn-publics')} />
                <CardPrimary src={('/src/assets/apricot-D.png')} title={('Apricot Danish')} text={('Public')} className={('btn-publics')} />
              </div>
              <div className="cont-card">
                <CardPrimary src={('/src/assets/apricot-D.png')} title={('Apricot Danish')} text={('Public')} className={('btn-publics')} />
                <CardPrimary src={('/src/assets/apricot-D.png')} title={('Apricot Danish')} text={('Public')} className={('btn-publics')} />
                <CardPrimary src={('/src/assets/apricot-D.png')} title={('Apricot Danish')} text={('Public')} className={('btn-publics')} />
              </div>
              <div className="cont-card">
                <CardPrimary src={('/src/assets/apricot-D.png')} title={('Apricot Danish')} text={('Public')} className={('btn-publics')} />
                <CardPrimary src={('/src/assets/apricot-D.png')} title={('Apricot Danish')} text={('Public')} className={('btn-publics')} />
                <CardPrimary src={('/src/assets/apricot-D.png')} title={('Apricot Danish')} text={('Public')} className={('btn-publics')} />
              </div>

              <Button className={('btn-orange no-radius')} text={'See more course'} />
            </div>
          </div>
        </section>

        <Footer />
      </>
        : ""}

      <Outlet />

    </>
  )
}

export default Courses