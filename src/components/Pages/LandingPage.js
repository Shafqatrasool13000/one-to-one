import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Navbars from '../Navbar/Navbar'
import Products from '../Products/Products'
import blackgloves from '../../assets/icons/blackgloves.png';
import groinBlack from '../../assets/icons/groin-black.png';
import groinRed from '../../assets/icons/groin-red.png';
import redgloves from '../../assets/icons/redgloves.png';
import fillHeart from '../../assets/icons/ic_like_sel.svg';
import emptyHeart from '../../assets/icons/ic_like.svg';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Testomonial from '../Testomonial/Testomonial';
import { StyledLandingPage } from './StyledLandingPage';

const LandingPage = () => {

    const handProtectProducts= [{
        img: redgloves, emptyHeart: emptyHeart
    }, {
        img: blackgloves, fillHeart: fillHeart
    }, {
        img: redgloves, emptyHeart: emptyHeart, discount: '50% OFF'
    }, {
        img: blackgloves, fillHeart: fillHeart
    }]
    const gainProtectProducts= [{
        img: groinRed, emptyHeart: emptyHeart
    }, {
        img: groinBlack, fillHeart: fillHeart,discount: '50% OFF'
    }, {
        img: groinRed, emptyHeart: emptyHeart
    }, {
        img: groinBlack, fillHeart: fillHeart, discount: '50% OFF'
    }]
    return (
        <StyledLandingPage>
            <div className="d-md-none">

            <Navbars />
            </div>
            <HeroSection />
            <div className="hand-protection mt-3 mt-md-0">
                <Products title='Hand Protection' products={handProtectProducts} />
            </div>
            <div className="gain-protection mt-80">
                <Products title='Groin Protection' products={gainProtectProducts} />
            </div>
            <div className="experience-section mt-80">
                <Experience/>
            </div>
            <div className="head-protection mt-80">
                <Products title='Head Protection' products={gainProtectProducts} />
            </div>
            <div className="shin-protection mt-80">
                <Products title='Shin Protection' products={handProtectProducts} />
            </div>
            <div className="testomonial-section mt-80">
                <Testomonial/> 
             </div>
            <div className="footer-section">
                <Footer/>
            </div>
        </StyledLandingPage>
    )
}

export default LandingPage