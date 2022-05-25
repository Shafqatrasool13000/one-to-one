
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import prevBtn from '../../assets/icons/ic_arrow_left.svg';
import nextBtn from '../../assets/icons/ic_arrow_right.svg';
import { StyledArrowSlideProducts } from './StyledArrowSlideProducts';

const ArrowSlideProducts = ({children}) => {
  
  return (
    <StyledArrowSlideProducts>
      
      <div className="inner-container">
        <Container>
          <Row className='justify-content-center'>
            <span>
              <img className='prev-slide-img slide-img' src={prevBtn} alt="previous" />
            </span>
            {children}
           
            <span>
              <img className='next-slide-img slide-img' src={nextBtn} alt="next" />
            </span>
          </Row>
        </Container>
      </div>

    </StyledArrowSlideProducts>
  )
}

export default ArrowSlideProducts