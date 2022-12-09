import React, { useEffect, useState, useRef } from 'react';
import BgImage from '../../assets/bgD.png';
import styled from '@emotion/styled';
import Image1 from '../../assets/h_1.png'
import Image2 from '../../assets/h_2.png'

import Image3 from '../../assets/h_3.png'
import Image4 from '../../assets/h_4.png'
import Image5 from '../../assets/h_5.png'
import HeroImage from '../../assets/h_n.png'
import Courses from '../courses';
import Brand from '../Brands';

import { useMediaQuery } from '@mui/material';
import Header from '../header';
import { useNavigate } from 'react-router-dom';
import './hero.styles.css'


export const Button = styled.button`
    width: 161px;
    height: 49px;
    left: 1164px;
    top: 51px;
    background: linear-gradient(92.54deg, #DD6E20 -14.34%, #DDA333 98.84%);
    border-radius: 4px;
    border: none;
    z-index: 10;
    outline: none;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    cursor: pointer;
    a {
        color: #fff;
        text-decoration: none;
    }
`


const Hero = () => {

    const matches = useMediaQuery('(min-width:600px)');
    const navigation = useNavigate()

    const handleClick = (ele) => {
        const element = document.querySelector(ele);
        element.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <div className='h_cont'>
            <Header />
            <div className='hero_box'>
                <div className='hero_1'>
                    <div className='hero_text_1'>Be prepared for the future, join millions of students<br /> all over the globe</div>
                    <div className='hero_text_2'>Get Certfifed by
                        <br /><span>accredited Institutions</span> <br />on in-demand skills</div>

                    <div className='boxes'>
                        <div className='image_box'>
                            <img src={Image1} />
                            <div style={{color: '#0B7236'}}>
                                DevOps
                            </div>
                        </div>
                        <div className='image_box'>
                            <img src={Image2} />
                            <div style={{color: '#1F70A3'}}>
                                Cloud <br />Computing
                            </div>
                        </div>
                        <div className='image_box'>
                            <img src={Image3} />
                            <div style={{color: '#880974'}}>
                                Product <br />Design
                            </div>
                        </div>
                        <div className='image_box'>
                            <img src={Image4} />
                            <div style={{color: '#0B7236'}}>
                                Data <br />Analysis
                            </div>
                        </div>
                        <div className='image_box'>
                            <img src={Image5} />
                            <div style={{color: '#096EAE'}}>
                                Cyber <br />Security
                            </div>
                        </div>

                    </div>

                    <div className='all_courses'>
                        <input placeholder='All Courses' />
                        <button>All Courses</button>
                    </div>

                    

                </div>
                <div className='hero_2'>
                    <img src={HeroImage} className='img' />
                </div>
            </div>
            <Brand />
            <Courses />
        </div>
    )
}

export default Hero