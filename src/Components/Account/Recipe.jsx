import React from 'react'
import Button from '../Boutons/Button'
import InputSearch from '../Input/InputSearch'

function Recipe() {
  return (
    <>
      <section className='profile-recipe'>

        <h5>MY RECIPE</h5>

        <div className="profile-recipe__top">
          <div className="top">
            <h6>Recipe book</h6>
            <h6>Course list</h6>
            <h6>My contributions</h6>
          </div>
          <div className="line-separate"></div>
        </div>

        <div className="profile-recipe__center">
          <Button type={('button')} text={('All categories')} srcRight={('/src/icons/chevronDownOrange.svg')} className={('btn-categories')} />
          <InputSearch className={('input-search-orange')} placeholder={('Search')} />
        </div>

        <div className="profile-recipe__bottom">
          <div className="left">
            <button>Selected</button>
            <button>Deselected</button>
          </div>

          <div className="btn-remove">
            <img src="/src/icons/remove-red.svg" alt="" />
          </div>

        </div>
      </section>
    </>
  )
}

export default Recipe