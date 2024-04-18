import React from 'react'
import Button from '../Components/Boutons/Button'
import InputSearch from '../Components/Input/InputSearch'
import CardCircle from '../Components/Cards/CardCircle'


function Categories() {
  return (
    <>
      <h2 className='categories-title'>Categories</h2>

      <div className="categ-search-zone">
        <Button text={('All categories')} type={('button')} className={('btn-categories active')} />

        <div className="right">
          <img src="/src/icons/params-orange.svg" alt="" />
          <InputSearch className={('input-search-orange')} placeholder={('Search by food name')} id={('search-categ')} />
        </div>
      </div>

      <div className="list-categ">
        <ul className="top">
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>

        </ul>

        <ul className="center-top">
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>

        </ul> <ul className="center-bottom">
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
        </ul> <ul className="bottom">
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
          <li><CardCircle src={('/src/assets/pasta.jpg')} title={('Pasta')} /></li>
        </ul>
      </div>
    </>
  )
}

export default Categories