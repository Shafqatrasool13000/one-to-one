import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { StyledTestomonial } from './StyledTestomonial'
import profile from '../../assets/icons/profile.jpg';
import prevBtn from '../../assets/icons/ic_arrow_left.svg';
import nextBtn from '../../assets/icons/ic_arrow_right.svg';
import { Rate } from 'antd';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Testomonial = () => {
  const arr = [1, 2, 3,4,5];
  const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows:false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  return (
    <StyledTestomonial>
      <h5 className="title text-center">
        TESTIMONIALS
      </h5>     
      <div className="testomonials">
        <Container>
          <Row className='justify-content-center'>
            <span>
              <img className='prev-slide-img slide-img' src={prevBtn} alt="previous" />
            </span>
       
            
        <Slider {...settings}>
        {
              arr.map((item,index)=>(
                <Col sm={6} md={4} key={index} className='mt-3 mt-md-0 px-3'>
                <Card >
                  <Card.Body>
                    <div className="d-flex mt-2">
                      <div className="intro-section d-flex justify-content-between align-items-center">
                        <img src={profile} alt="profile" className="profile-img" />
                        <div className="name-section ms-3">
                          <h6 className="name">John Smith</h6>
                          <p className="designation">Project Manager</p>
                        </div>
                      </div>
                    </div>
  
                    <Card.Text className='text-center px-3'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                    </Card.Text>
                    <div className="rating-section d-flex justify-content-center">
                      <Rate defaultValue={5} />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              ))
            }        
        </Slider>
            <span>
              <img className='next-slide-img slide-img' src={nextBtn} alt="next" />
            </span>
          </Row>
        </Container>
      </div>

    </StyledTestomonial>
  )
}

export default Testomonial