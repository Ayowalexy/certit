import React from "react";
import './testimonials.styles.css';

const Card = ({name, text}) => (
    <div className="l_container">
        <div className="l_box" />
        <div className="short">
            {name}
        </div>
        <div className="saying">
           {text}
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
                   
                    {
                    [
                        {
                            name: 'I have been looking for an online platform to learn Data Analysis and I came to the right platform.',
                            text: 'Opurum Merit'
                        },{
                            name: 'The self-paced lectures has been very helpful to my tight work schedule. I learn when I’m back from work',
                            text: 'Daniel Ajayi'
                        },{
                            name: 'I’m looking forward to start my course scheduled for the new batch, I hope it will be mind  blowing.',
                            text: 'Akere Kabari'
                        },

                    ].map((element, idx) => <Card name={element.name} text={element.text} key={idx} />)
                }
                </div>
            </div>
        </div>
    )
}

export default Testimonials