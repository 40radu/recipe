
import InputCourses from "../Input/InputCourses"
import { Form } from "react-router-dom"
import Button from "../Boutons/Button"
function CreateCourses() {

  return (

    <>

      <section className="create-courses-cont">

        <div className="create-courses-cont__btn-back">
          <img src="/src/icons/chevron-left-orange.svg" alt="" />
          <p>Creation Of Course</p>
        </div>


        <Form className="cont-form">
          <div className="cont-form__top">
            <div className="left">
              <div className="under-cont">
                <h5>Categories</h5>
                <InputCourses placeholder={('Ex: Asiatique')} src={('/src/icons/chevronDown-input.svg')} name={('categories')} />
              </div>

              <div className="under-cont">
                <h5>Name</h5>
                <InputCourses placeholder={('Ex: Chocolate chip cookies')} name={('name')} />
              </div>

              <div className="under-cont">
                <h5>Ingredients</h5>
                <InputCourses placeholder={('Ex: Chocolate, sugar, ...')} name={('ingredient')} />
              </div>

              <div className="under-cont">
                <h5>Utensil*</h5>
                <InputCourses placeholder={('Ex: pan, bowl ...')} src={('/src/icons/chevronDown-input.svg')} name={('utensil')} />
              </div>
            </div>

            <div className="right">
              <div className="right__top">
                <h5>Description of course </h5>
                <div>
                  <textarea name="" id="" cols="30" rows="10"  className="text-area"></textarea>
                  <img src="/src/icons/edit.svg" alt="" />
                </div>
              </div>

              <div className="right__center">
                <h5>Video</h5>
                <InputCourses placeholder={('Link')} name={('video')} />
              </div>

              <div className="right__bottom">
                <h5>Add Picture</h5>
                <button>
                  <img src="/src/icons/add-pict.svg" alt="" />
                  <p>Add Picture</p>
                </button>
              </div>

            </div>
          </div>

          <div className="cont-form__bottom">

            <Button className={('btn-orange')} type={('submit')} text={('Publish')} />
            <Button className={('btn-categories')} type={('button')} text={('Cancel')} />

          </div>




        </Form>

      </section>
    </>
  )
}

export default CreateCourses