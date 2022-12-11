import React from "react";
import './africa.styles.css'
import Frame from '../../assets/h_frame.png'
import { Box } from "../header";
import { Card } from "../courses";
import F_2 from '../../assets/f_2.png'
import {AiOutlineArrowRight } from 'react-icons/ai'


const Africa = () => {
    return (
        <div className="africa_container">
            <div className="a_parant">
                <div className="a_frame">
                    <div className="a_sec_one">
                        <img src={Frame} />
                    </div>
                    <div className="a_sec_two">
                        <div className="a_header">
                            Africa’s Foremost  Marketplace for Institutional Certifications in Digital Skills
                        </div>
                        <div className="a_text">
                            Short Courses Certifcation, Diploma, Higher Diploma, MSc, MBA, PHD in in-demand digital skills.
                        </div>
                        <div className="a_box">
                            <Box>
                                Enroll now
                            </Box>
                        </div>
                    </div>
                </div>



                <div className="join_g_parant">
                    <div className="join_parent">
                        <div className="join">Join the next batch</div>
                        <div className="arrow"> 
                            <div>
                                <AiOutlineArrowRight fill="#fff" />
                            </div>
                            <div>
                                <AiOutlineArrowRight fill="#fff" />
                            </div>
                        </div>
                        <Card
                            img={F_2}
                            week='12 weeks'
                            price='30.5$'
                            students='1.5k+ Students'
                            name='Learn Marketing from Top Instructors.'
                        />
                    </div>
                    <div className="join_side">
                        {['January', 'February', 'March', 'April', 'May'].map(ele => (
                            <div className="eleBox">{ele}</div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Africa