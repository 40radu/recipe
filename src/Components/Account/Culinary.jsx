import React from 'react'
import InputCourses from '../Input/InputCourses'
function Culinary() {
  return (
    <>
      <section className="profile-culinary">
        <div className="profile-culinary__left">

          <h5>MY CULINARY PREFERENCIES</h5>

          <div className="top">

            <h6>My favorites ingredients</h6>

            <div className="cont add-ingredients">
              <InputCourses />
              <img src="/src/icons/add-blue.svg" alt="" className='btn-add-i' />
            </div>

            <div className="cont list-ingredients">
              <InputCourses name={('ingredient')} />
              <img src="/src/icons/remove-blue.svg" alt="" className='btn-delete-i' />
            </div>

            <div className="cont list-ingredients">
              <InputCourses name={('ingredient')} />
              <img src="/src/icons/remove-blue.svg" alt="" className='btn-delete-i' />
            </div>


          </div>

          <div className="line-separate"></div>

          <div className="bottom">
            <h6>My dream  meal</h6>
            <InputCourses name={('dream_meal')} />
          </div>
        </div>

        <div className="profile-culinary__right">

          <div className="container top">
            <h6>My most common meal</h6>
            <InputCourses name={('common_meal')} />
          </div>

          <div className="line-separate"></div>

          <div className="container center">
            <h6>My specialities</h6>
            <InputCourses name={('specialities')} />
          </div>


          <div className="container bottom">
            <h6>My current culinary obsession</h6>
            <InputCourses name={('culinary_obsession')} />
          </div>

          <div className="line-separate"></div>


        </div>

      </section>
    </>
  )
}

export default Culinary