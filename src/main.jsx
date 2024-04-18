import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Routes/Root.jsx'
import ErrorPage from './Routes/ErrorPage.jsx'
import Home from './Routes/Home.jsx'
import Categories from './Routes/Categories.jsx'
import Meal_Planners from './Routes/Meal_Planners.jsx'
import Courses from './Routes/Courses.jsx'
import About_Us from './Routes/About-Us.jsx'
import Contact from './Routes/Contact.jsx'
import Login from './Routes/Login.jsx'
import Sign_up from './Routes/Sign_up.jsx'
import PrivateRoute from './Routes/PrivateRoute.jsx'
import MealPlannersNav from './Components/MealPlannersNav.jsx'
import CardMealPlanners from './Components/MealPlanners/CardMealPlanners.jsx'
import CreateCourses from './Components/CreateCourses/CreateCourses.jsx'
import Profile from './Routes/Profile.jsx'
import PersonnalInfo from './Components/Account/PersonnalInfo.jsx'
import Culinary from './Components/Account/Culinary.jsx'
import Recipe from './Components/Account/Recipe.jsx'
import FavoriteRecipe from './Components/Account/FavoriteRecipe.jsx'
import Admin from './Routes/Admin.jsx'
import UserAdmin from './Components/Admin/UserAdmin.jsx'
import { actionSign } from './Routes/Sign_up.jsx'
import { actionLogin } from './Routes/Login.jsx'
import { actionProfile } from './Routes/Profile.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "profile",
            element: <Profile />,
            action:actionProfile,
            children: [{
              path: "info",
              element: <PersonnalInfo />,
            },
            {
              path: "culinary",
              element: <Culinary />,
            },
            {
              path: "recipe",
              element: <Recipe />,
            },
            {
              path: "favorite_recipe",
              element: <FavoriteRecipe />,
            }]
          },
          {
            path: "/",
            element: <Home />
          },
          {
            path: "categories",
            element: <Categories />
          },
          {
            path: "meal",
            element: <Meal_Planners />,
            children: [
              {
                element: <CardMealPlanners />,
                path: "breakfast"
              },
              {
                element: <CardMealPlanners />,
                path: "lunch"
              }, {
                element: <CardMealPlanners />,
                path: "dinner"
              }, {
                element: <CardMealPlanners />,
                path: "snack"
              }
            ]
          },
          {
            path: "courses",
            element: <Courses />,
            children: [{
              path: "create",
              element: <CreateCourses />
            }]
          },
          {
            path: "/about",
            element: <About_Us />
          },
          {
            path: "/contact",
            element: <Contact />
          },
          {
            path:"admin",
            element: <Admin/>,
            children:[
              {
                path: "/admin",
                element:<UserAdmin/>,
              }
            ]
          }
        ]
      },

      {
        path: "/login",
        element: <Login />,
        action: actionLogin,
      },
      {
        path: "/sign",
        element: <Sign_up />,
        action: actionSign,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
