import React from "react";
import './courses.styles.css';
import Frame from '../../assets/frame.png'
import { Box } from "../header";
import F_1 from '../../assets/f_1.png'
import F_2 from '../../assets/f_2.png'
import F_3 from '../../assets/f_3.png'
import F_4 from '../../assets/f_4.png'
import F_5 from '../../assets/f_5.png'
import F_6 from '../../assets/f_6.png'



export const Card = ({ name, img, students, week, price, header }) => (
    <div className="framer">
        <img src={img} />
        <div className="boxer">
            <div className="card_header">
                {header}
            </div>
            <a target='_blank' href="https://forms.gle/Fq5zPspoSvbogzyH8">
                <Box> Enroll</Box>
            </a>
        </div>
        <div className="framer_b">
            <div className="card_text">
                {name}
            </div>
            <div className="card_footer">
                <div className="card_footer_1">
                    <div>{week}</div>
                    <div>{students}</div>
                </div>
                <div className="footer_price">{price}</div>
            </div>
        </div>

    </div>
)


const Courses = () => {
    return (
        <div className="co_cont">
            <div className="featured">Featured courses</div>
            <div className="courses_card">
                {
                    [
                        {
                            name: 'Data Analysis Python programming',
                            img: F_1,
                            students: '1.5k+ Students',
                            week: '12 weeks',
                            price: '50$',
                            header: 'National Open University of Nigeria'
                        },
                        {
                            name: 'Cloud Computing 3-in-1 Course (AWS, Microsoft and Google Clouds)',
                            img: F_2,
                            students: '1k+ Students',
                            week: '12 weeks',
                            price: '75$',
                            header: ''
                        }, {
                            name: 'Cyber Security Online Course.',
                            img: F_3,
                            students: '1.5k+ Students',
                            week: '12 weeks',
                            price: '80.5$',
                            header: ''
                        }, {
                            name: 'Product Design (Learn UI/UX Figma Design)',
                            img: F_4,
                            students: '1.5k+ Students',
                            week: '12 weeks',
                            price: '50$',
                            header: ''
                        }, {
                            name: 'Data Engineering Online Course',
                            img: F_5,
                            students: '1.5k+ Students',
                            week: '12 weeks',
                            price: '100$',
                            header: ''
                        }, {
                            name: 'Digital Marketing Complete Course.',
                            img: F_6,
                            students: '1.5k+ Students',
                            week: '8 weeks',
                            price: '30$',
                            header: ''
                        },

                    ].map((element, idx) => (
                        <Card
                            key={idx}
                            header={element.header}
                            name={element.name}
                            img={element.img}
                            students={element.students}
                            week={element.week}
                            price={element.price}
                        />
                    ))
                }

            </div>


        </div>
    )
}

export default Courses