import axiosInstance from "../../Services/axios";
import InputCourses from "../Input/InputCourses"
import { Form } from "react-router-dom"
import Button from "../Boutons/Button"
import CourseService from "../../Services/courseService";
// import { all } from "axios";
import axios from "axios";


export async function actionCreateCourse({ request }) {

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const allData = {
    "author": localStorage.getItem("id"),
    ...data
  }
  try {


    //1
    const result = await CourseService.createCourse(allData)
    console.log(result)
    //2
    // const result =await axiosInstance.post("course",allData)
    //3
    //  const rest = await fetch('http://localhost:4400/api/course', {
    //     headers: {"Content-Type": "application/json"},
    //     method: "POST",
    //     body: JSON.stringify(allData)
    //   }).then( resp => resp)

    // console.log(rest)

    console.log('mande n action create Course')
    console.log(result)
    console.log(allData)
    return null;
  } catch (error) {
    console.log(error.message)
  }
}

function CreateCourses() {

  return (

    <>

      <section className="create-courses-cont">

        <div className="create-courses-cont__btn-back">
          <img src="/src/icons/chevron-left-orange.svg" alt="" />
          <p>Creation Of Course</p>
        </div>


        <Form className="cont-form" method="POST" action="">
          <div className="cont-form__top">
            <div className="left">
              <div className="under-cont">
                <h5>Title</h5>
                <InputCourses placeholder={('Title')} src={('/src/icons/chevronDown-input.svg')} name={('title')} />
              </div>

              <div className="under-cont">
                <h5>Privacy</h5>
                <InputCourses placeholder={('Ex: Chocolate chip cookies')} name={('privacy')} />
              </div>

              <div className="under-cont">
                <h5>Description</h5>
                <InputCourses placeholder={('Ex: Chocolate, sugar, ...')} name={('description')} />
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
                  <textarea name="" id="" cols="30" rows="10" className="text-area"></textarea>
                  <img src="/src/icons/edit.svg" alt="" />
                </div>
              </div>

              <div className="right__center">
                <h5>Video</h5>
                <InputCourses placeholder={('Link')} name={('link')} />
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