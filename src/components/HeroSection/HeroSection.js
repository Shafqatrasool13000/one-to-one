import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { HeroSectionStyled } from './StyledHeroSection'
import heroImg from '../../assets/icons/ic_banner_img_2.svg';
import crown from '../../assets/icons/ic_logo_crown.svg';
import Navbars from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
const HeroSection = () => {
    return (
        <HeroSectionStyled>
            <div className="d-none d-sm-block">
            <Navbars/>
            </div>
            <Container>
                <Row >
                    <Col md={6}>
                        <div className="text-section  d-flex flex-column justify-content-center">
                            <div className="d-flex mini-title">
                            <p className="mini-title-text">Welcome to One on One</p>
                            <span className='mini-title-img mt-3'>
                            <img src={crown} alt="crown" />
                            </span>    
                            </div>
                            <h1 className="main-heading">
                                <div className="d-flex">
                                <span>EVERY GREA</span>
                               <div className='d-flex flex-column icon-text '>
                             
                                <span>T</span>    
                                </div>
                                </div>
                                <span className='journey-start'>Journey Starts With One</span>

                                <span className='d-block'>STEP!</span>
                            </h1>
                            <p className='details'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <span>
                             <Link to='/shop'>
                            <button className="btn btn-sm shop-btn px-5 py-2">Shop Now</button>
                             </Link>
                            </span>
                        </div>
                    </Col>
                    <Col md={6} className='mt-2 mt-md-0'>


                        <div className="img-section">
                            <img src={heroImg} alt="hero-img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </HeroSectionStyled>
    )
}

export default HeroSection