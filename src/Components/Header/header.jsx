import React, { useState } from 'react';
import InviLogo from '../assets/Invi-logo.svg';
import Linkedin from '../assets/linkedin.svg';
import Insta from '../assets/instagram.svg';
import Whatsapp from '../assets/whatsapp.svg';

import './header.css'

const Header = () => {


    return (
        <>
            <header className="header">
                <div className="header-container">

                    <div className='coming-soon'>
                        Levelling Up
                    </div>

                    <div className="logo">
                        <img src={InviLogo} alt="Logo" />
                    </div>

                    <div className="header-right">
                        <a href="https://www.linkedin.com/company/invicious/" target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} alt="LinkedIn Logo" className="socialicon1" />
                        </a>
                        <a href="https://www.instagram.com/invicious.in/" target="_blank" rel="noopener noreferrer">
                            <img src={Insta} alt="Instagram Logo" className="socialicon2" />
                        </a>
                        <a href="https://wa.me/918877880101" target="_blank" rel="noopener noreferrer">
                            <img src={Whatsapp} alt="WhatsApp Logo" className="socialicon3" />
                        </a>

                    </div>

                </div>



            </header >
        </>

    );
};

export default Header;
