import React, { useState } from 'react'
import Button from '../Components/Boutons/Button'
import { Link, NavLink, Outlet } from 'react-router-dom'
import MealPlannersNav from '../Components/MealPlannersNav'
import InputPlanners from '../Components/Input/InputPlanners'
import { useLocation } from 'react-router-dom'

function Meal_Planners() {

  const { pathname } = useLocation();
  // const [style, setStyle]= useState("")
  return (
    <>
      <section className="cont-meal-plan" style={{background:`${pathname==="/meal"?"":"white"}`, rowGap:`${pathname==="/meal"?"":"47px"}`,
      height:`${pathname==="/meal"?"":"auto"}`}} >

        <div className="cont-meal-plan__top">
          <h4>Meal Planners</h4>
          <div className="cont-btn">
            <MealPlannersNav />
          </div>
        </div>

        <div className="cont-meal-plan__bottom">
          {pathname === "/meal"?<p className="parag-top">
          Meal planning is a practical and efficient approach to managing your diet and nutrition. 
          It involves the process of deciding in advance what you'll eat for specific meals over a
           designated period, typically a week. Whether you're aiming to eat healthier, save time, 
           reduce food waste, or stick to a budget, meal planning can help you achieve your goals.
          </p>: ""}
          {pathname === "/meal"?<p className="parag-bottom">
          By taking the time to plan your meals, you can make well-informed choices about the foods you consume,
           ensuring a balanced and nutritious diet. It also allows you to consider dietary restrictions or preferences, 
           such as vegetarian, vegan, gluten-free, or low-carb diets. Meal planning is not only beneficial for individuals
            but also for families, helping streamline the cooking process and making it easier to provide nourishing meals for everyone.
          </p> :""}
          <Outlet />
        </div>
        

      </section>




    </>
  )
}

export default Meal_Planners