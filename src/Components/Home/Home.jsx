import React, { useEffect, useState } from 'react';
import './home.css';
import Header from '../Header/header';
import Roc1 from '../assets/Roc1.png';
import Roc2 from '../assets/Roc2.png';
import Roc3 from '../assets/Roc3.png';
import Roc4 from '../assets/Roc4.png';
import Hand1 from '../assets/Hand1.png';
import Hand2 from '../assets/Hand2.png';
import Hand3 from '../assets/Hand3.png';
import FooterImg from '../assets/Footer-img.svg';
import Linkedin from '../assets/linkedin.svg';
import Insta from '../assets/instagram.svg';
import Whatsapp from '../assets/whatsapp.svg';

import Footer from '../Footer/footer';


const Home = () => {
    const [showContent, setShowContent] = useState(false);
    const [showHeader, setShowHeader] = useState(false);
    const [showFooter, setShowFooter] = useState(false);

    const [rocketStage, setRocketStage] = useState(0);
    const [handStage, setHandStage] = useState(0);




    useEffect(() => {
        // Step 1: Fade in home-content immediately

        const fadein = setTimeout(() => {
            setShowContent(true);
        }, 800);

        // Step 2: Show header and footer
        const headerTimer = setTimeout(() => {
            setShowHeader(true);
        }, 1500);

        const footerTimer = setTimeout(() => {
            setShowFooter(true);
        }, 1500);

        // Step 3: Transition through rocket stages
        const stageDuration = 1000;
        const rocketTimers = [
            setTimeout(() => setRocketStage(1), 4000),
            setTimeout(() => setRocketStage(2), 4000 + stageDuration),
            setTimeout(() => setRocketStage(3), 4000 + 2 * stageDuration),
            setTimeout(() => setRocketStage(4), 4000 + 3 * stageDuration),
        ];

        const handTimers = [
            setTimeout(() => setHandStage(1), 4000),
            setTimeout(() => setHandStage(2), 4000 + stageDuration),
            setTimeout(() => setHandStage(3), 4000 + 2 * stageDuration),
            // setTimeout(() => setHandStage(4), 9000 + 3 * stageDuration),
        ];


        return () => {
            rocketTimers.forEach(timer => clearTimeout(timer));
            handTimers.forEach(timer => clearTimeout(timer));
            clearTimeout(fadein);
            clearTimeout(headerTimer);
            clearTimeout(footerTimer);
        };
    }, []);


    return (
        <div className={`HomeSections ${showContent ? 'show-content' : ''} ${showHeader ? 'show-header' : ''} ${showFooter ? 'show-footer' : ''}`}>
            <div className="HeaderContainer">
                <Header />
            </div>
            <div className='animation-content'>

                <div className={`rocket-container ${rocketStage === 4 ? 'move-updown' : ''}`}>
                    <img src={Roc1} className={`rocket-image ${rocketStage >= 1 ? 'visible' : ''}`} alt="Rocket Step 1" />
                    <img src={Roc2} className={`rocket-image ${rocketStage >= 2 ? 'visible' : ''}`} alt="Rocket Step 2" />
                    <img src={Roc3} className={`rocket-image ${rocketStage >= 3 ? 'visible' : ''}`} alt="Rocket Step 3" />
                    <img src={Roc4} className={`rocket-image ${rocketStage >= 4 ? 'visible' : ''}`} alt="Rocket Step 4" />
                </div>


                <div className="home-content">
                    <div className='head1'>We don’t Just think, We DO</div>
                    <div className='head2'>We've been around for a while, and now we’re leveling up to bring you something even better! Until then...</div>
                    <div className='queries'>
                        <div>
                            For Course Queries -
                            <a href="tel:9150043778">9150043778</a>
                        </div>
                        <div>
                            For Project Queries -
                            <a href="tel:8877880101">8877880101</a>
                        </div>

                        <div>Other Queries - <a href="mailto:support@invicious.in">support@invicious.in</a></div>

                    </div>
                </div>

                <div className="HeaderContainer">
                    <div className="header-right-mobile">
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

                <div className={`hand-container ${handStage === 3 ? 'move-updown' : ''}`}>
                    <img src={Hand1} className={`hand-image ${handStage >= 1 ? 'visible' : ''}`} alt="Hand Step 1" />
                    <img src={Hand2} className={`hand-image ${handStage >= 2 ? 'visible' : ''}`} alt="Hand Step 2" />
                    <img src={Hand3} className={`hand-image ${handStage >= 3 ? 'visible' : ''}`} alt="Hand Step 3" />
                </div>

            </div>

            <div className='mobile-animation'>
                <div className={`rocket-container ${rocketStage === 4 ? 'move-updown' : ''}`} id='mobile-rocket'>
                    <img src={Roc1} className={`rocket-image ${rocketStage >= 1 ? 'visible' : ''}`} alt="Rocket Step 1" />
                    <img src={Roc2} className={`rocket-image ${rocketStage >= 2 ? 'visible' : ''}`} alt="Rocket Step 2" />
                    <img src={Roc3} className={`rocket-image ${rocketStage >= 3 ? 'visible' : ''}`} alt="Rocket Step 3" />
                    <img src={Roc4} className={`rocket-image ${rocketStage >= 4 ? 'visible' : ''}`} alt="Rocket Step 4" />
                </div>

                <div className={`hand-container ${handStage === 3 ? 'move-updown' : ''}`} id='mobile-hand'>
                    <img src={Hand1} className={`hand-image ${handStage >= 1 ? 'visible' : ''}`} alt="Hand Step 1" />
                    <img src={Hand2} className={`hand-image ${handStage >= 2 ? 'visible' : ''}`} alt="Hand Step 2" />
                    <img src={Hand3} className={`hand-image ${handStage >= 3 ? 'visible' : ''}`} alt="Hand Step 3" />
                </div>
            </div>





            <div className="FooterContainer">
                <div className='mobile-footer-container'>
                    <img src={FooterImg} alt="Img" className="footerImg" id='mobile-footer-img' />

                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
