import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FooterStyledMain } from './StyledFooter'
import logo from '../../assets/icons/ic_logo.svg';
import insta from '../../assets/icons/ic_instagram.svg';
import fb from '../../assets/icons/ic_facebook.svg';
import email from '../../assets/icons/ic_email.svg';
import twitter from '../../assets/icons/ic_twitter.svg';

const Footer = () => {
    const links = ['Home', 'Shop', 'About', 'Contact'];
    const news = ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem laborum veritatis quis dolorum, sunt blanditiis eveniet similique repellendus cupiditate', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem laborum veritatis quis dolorum, sunt blanditiis eveniet similique repellendus cupiditate', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem laborum veritatis quis dolorum, sunt blanditiis eveniet similique repellendus cupiditate'];
    const socailIcons = [fb, insta, twitter];
    const contact = [{ icon: email, text: "(123) 123-1234" }, { icon: email, text: "oneonone@gmail.com" }]
    return (
        <FooterStyledMain>
            <div className="footer-section">

                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="logo-section">
                                <img src={logo} alt="logo" className="logo" />
                                <p className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>

                                <div className="social-icons d-flex">
                                    {socailIcons.map((icon, index) => (
                                        <img src={icon} alt="icon" key={index} className="icon" />
                                    ))}
                                </div>

                                <div className="contact-section">
                                    {contact.map((({ icon, text },index) => (
                                        <div key={index} className="d-flex align-items-center contact">
                                            <img src={icon} alt="" />
                                            <p className="text">{text}</p>
                                        </div>
                                    )))}

                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='d-md-flex justify-content-center mt-3 mt-sm-0'>
                            <div className="quick-links">
                                <p className="title">Quicks Links</p>
                                <ul>
                                    {links.map((link, index) => (
                                        <li key={index}>{link}</li>
                                    ))}
                                </ul>

                            </div>
                        </Col>
                        <Col md={4} className='news-section'>
                            <p className="title">Recent News</p>
                            <div className="news-section">
                                {news.map((news, index) => (
                                    <div key={index}>
                                        <p >{news}</p>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="copyright-section">
                <Container>
                    <p className="copyright">Copyright © 2022 One on One</p>
                </Container>
            </div>
        </FooterStyledMain>
    )
}

export default Footer