import React from "react";
import './courses.styles.css';
import Frame from '../../assets/frame.png'
import { Box } from "../header";


export const Card = () => (
    <div className="framer">
        <img src={Frame} />
        <div className="boxer">
            <Box>Enroll</Box>
        </div>
        <div className="card_text">
            Learn Marketing from Top Instructors.
        </div>
        <div className="card_footer">
            <div className="card_footer_1">
                <div>6 weeks</div>
                <div>1.5k Students</div>
            </div>
            <div className="footer_price">30.5$</div>
        </div>

    </div>
)


const Courses = () => {
    return (
        <div className="co_cont">
            <div className="featured">Featured courses</div>
            <div className="courses_card">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>


        </div>
    )
}

export default Courses