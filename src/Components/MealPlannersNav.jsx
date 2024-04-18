import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Boutons/Button'

function MealPlannersNav() {

  const [classN, setClassN]=useState('btn-categories')
  return (
    <>
    <NavLink to="breakfast" ><Button className={(classN)} text={('Breakfast')} /></NavLink>
    <NavLink to="lunch" ><Button className={(classN)} text={('Lunch')} /></NavLink>
    <NavLink to="dinner" ><Button className={(classN)} text={('Dinner')} /></NavLink>
    <NavLink to="snack" ><Button className={(classN)} text={('Snack')} /></NavLink>

    </>
  )
}

export default MealPlannersNav