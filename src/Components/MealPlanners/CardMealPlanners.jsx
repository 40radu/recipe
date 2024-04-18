import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import InputPlanners from '../Input/InputPlanners'
import { useLocation } from 'react-router-dom'
import Button from '../Boutons/Button'

function CardMealPlanners() {
    const { pathname } = useLocation();
    const [title, setTitle] = useState('');
    useEffect(() => {
        {
            pathname === "/meal/breakfast" ? setTitle('Breakfast') :
                pathname === "/meal/lunch" ? setTitle('Lunch') :
                    pathname === "/meal/dinner" ? setTitle('Dinner') :
                        pathname === "/meal/snack" ? setTitle('Snack') : ""
        }
    }, [pathname])

    return (
        < >

            <section className='cont-card-mealP'>
                <h4>{`What's for ${title}?`}</h4>
                <Form method='POST' className='cont-form'>
                    <h5>{`Your 7 ${title} planners`}</h5>
                    <div className="top">
                        <div className="cont-inputs">
                            <div className="monday">
                                <h3>Monday</h3>
                                <InputPlanners src={("/src/icons/edit.svg")} />
                            </div>
                        </div>
                        <div className="cont-inputs">
                            <div className="tuesday">
                                <h3>Tuesday</h3>
                                <InputPlanners src={("/src/icons/edit.svg")} />
                            </div>
                        </div>
                        <div className="cont-inputs">
                            <div className="wednesday">
                                <h3>Wednesday</h3>
                                <InputPlanners src={("/src/icons/edit.svg")} />
                            </div>
                        </div>
                    </div>

                    <div className="center">
                        <div className="cont-inputs">
                            <div className="thursday">
                                <h3>Thursday</h3>
                                <InputPlanners src={("/src/icons/edit.svg")} />
                            </div>
                        </div>
                        <div className="cont-inputs">
                            <div className="friday">
                                <h3>Friday</h3>
                                <InputPlanners src={("/src/icons/edit.svg")} />
                            </div>
                        </div> <div className="cont-inputs">
                            <div className="saturday">
                                <h3>Saturday</h3>
                                <InputPlanners src={("/src/icons/edit.svg")} />
                            </div>
                        </div>
                    </div>

                    <div className="bottom">
                        <div className="cont-inputs">
                            <div className="sunday">
                                <h3>Sunday</h3>
                                <InputPlanners src={("/src/icons/edit.svg")} />
                            </div>
                        </div>

                    </div>

                    <div className="cont-btn">
                        <Button className={('btn-orange')} type={('button')} text={('Save')} />
                        <Button className={('btn-orange')} srcRight={('/src/icons/download.svg')} text={('Download PDF')} type={('button')} />
                    </div>
                </Form>


            </section>
        </>
    )
}

export default CardMealPlanners