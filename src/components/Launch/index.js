import React from "react";
import Image1 from '../../assets/p_1.png';
import Image2 from '../../assets/p_2.png';
import Image3 from '../../assets/p_3.png';
import Footer from "../Footer";

import { useMediaQuery } from "@mui/material";

import './launch.styles.css';


const Launch = () => {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <div className="launch_box_cont">
            <Footer />
        </div>
    )
}

export default Launch