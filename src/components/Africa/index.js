import React, { useState } from "react";
import './africa.styles.css'
import Frame from '../../assets/h_frame.png'
import { Box } from "../header";
import { Card } from "../courses";
import F_1 from '../../assets/f_1.png'
import F_2 from '../../assets/f_2.png'
import F_3 from '../../assets/f_3.png'
import F_4 from '../../assets/f_4.png'
import F_5 from '../../assets/f_5.png'
import F_6 from '../../assets/f_6.png'

import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

const data = [
    {
        name: 'Data Analysis Python programming',
        img: F_1,
        students: '1.5k+ Students',
        week: '12 weeks',
        price: '50$',
        header: 'National Open University of Nigeria',
        id: 1
    },
    {
        name: 'Cloud Computing 3-in-1 Course (AWS, Microsoft and Google Clouds)',
        img: F_2,
        students: '1k+ Students',
        week: '12 weeks',
        price: '75$',
        header: '',
        id: 2
    }, {
        name: 'Cyber Security Online Course.',
        img: F_3,
        students: '1.5k+ Students',
        week: '12 weeks',
        price: '80.5$',
        header: '',
        id: 3
    }, {
        name: 'Product Design (Learn UI/UX Figma Design)',
        img: F_4,
        students: '1.5k+ Students',
        week: '12 weeks',
        price: '50$',
        header: '',
        id: 4
    }, {
        name: 'Data Engineering Online Course',
        img: F_5,
        students: '1.5k+ Students',
        week: '12 weeks',
        price: '100$',
        header: '',
        id: 5
    }, {
        name: 'Digital Marketing Complete Course.',
        img: F_6,
        students: '1.5k+ Students',
        week: '8 weeks',
        price: '30$',
        header: '',
        id: 6
    },

]


const Africa = () => {
    const [eleData, setEleData] = useState(data[0]);
    const [num, setNum] = useState(0)


    const handleUpdate = () => {
        setEleData(data[num])
        if(num === 5){
            setNum(0)
        } else {
            setNum(prev => prev + 1)
        }
    }

    const handleUpdate_2 = () => {
        setEleData(data[num])
        if(num === 0){
            setNum(5)
        } else {
            setNum(prev => prev - 1)
        }
    }



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
                                <a target='_blank' href="https://forms.gle/Fq5zPspoSvbogzyH8">
                                    Enroll
                                </a>
                            </Box>
                        </div>
                    </div>
                </div>



                <div className="join_g_parant">
                    <div className="join_parent">
                        <div className="join">Join the next batch</div>
                        <div className="arrow">
                            <div
                                onClick={handleUpdate_2}
                            >
                                <AiOutlineArrowLeft size='30px' fill="#fff" />
                            </div>
                            <div
                                onClick={handleUpdate}
                            >
                                <AiOutlineArrowRight size='30px' fill="#fff" />
                            </div>
                        </div>
                        <Card
                            img={eleData.img}
                            week={eleData.week}
                            price={eleData.price}
                            students={eleData.students}
                            name={eleData.name}
                        />
                    </div>
                    <div className="join_side">
                        {['January', 'February', 'March', 'April', 'May'].map(ele => (
                            <a target='_blank' href="https://forms.gle/Fq5zPspoSvbogzyH8">
                                <div className="eleBox">{ele}</div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Africa