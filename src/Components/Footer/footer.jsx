import { useNavigate } from "react-router-dom";
import FooterImg from '../assets/Footer-img.svg';
import './footer.css'

const Footer = () => {





    return (
        <>
            <div className="footer-container">
                <div className="footer-left">
                    <div>Design & Branding</div>
                    <span>|</span>
                    <div>Website & App Development</div>
                </div>
                <img src={FooterImg} alt="Img" className="footerImg" />
                <div className="footer-right">
                    <span className="mobileSpan">|</span>
                    <div>Content Production</div>
                    <span>|</span>
                    <div>Digital Marketing</div>
                </div>
            </div>
            
        </>
    )
}

export default Footer;