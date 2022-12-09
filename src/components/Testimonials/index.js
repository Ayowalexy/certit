import React from "react";
import './testimonials.styles.css';

const Card = () => (
    <div className="l_container">
        <div className="l_box" />
        <div className="short">
            Short Courses Certifcation, Diploma, Higher Diploma, MSc, MBA, PHD in in-demand digital skills.
        </div>
        <div className="saying">
            What Learners are<br /> saying
        </div>
    </div>
)


const Testimonials = () => {
    return (
        <div className="test_cont">
            <div className="text_cont_">
                <div className="learner">
                    What Learners are saying
                </div>

                <div className="text_box_cont">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Testimonials