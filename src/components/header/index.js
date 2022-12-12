import React from "react";
import './header.styles.css'
import styled from "@emotion/styled";
import Logo from '../../assets/logo_.png'
import { useMediaQuery } from "@mui/material";
import { AiOutlineMenu } from 'react-icons/ai'

export const Box = styled.button`
    width: 104px;
    height: 39px;
    background: #EEA976;
    border-radius: 30px;
    border: none;
    outline: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    line-height: 22px;
    color: #000000;
`



const Header = () => {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <>
            {
                !matches ?
                    <div className="mpbile-header">


                        <img src={Logo} className='hheader_logo' />

                        <a target='_blank' href="https://forms.gle/Fq5zPspoSvbogzyH8">
                            <Box> Enroll</Box>
                        </a>

                        {/* <AiOutlineMenu /> */}

                    </div>
                    :
                    <div className="header__">
                        <div className="header_box">
                            <img src={Logo} className='hheader_logo' />
                            <div className="header_link">Home</div>

                            <div className="header_link">Certifications</div>
                            <div className="header_link">Contact Us</div>
                        </div>
                        <div className="header_box">
                            <a target='_blank' href="https://forms.gle/Fq5zPspoSvbogzyH8">
                                <Box> Enroll</Box>
                            </a>
                            <div className="header_link">Login</div>
                        </div>

                    </div>
            }
        </>
    )
}

export default Header