import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { StyledOrderPlaced } from './StyledOrderPlaced';
import checkImg from '../../assets/icons/ic_success.svg';

const OrderPlaced = () => {
  return (
    <StyledOrderPlaced>
        <Container>
        <Card className="inner-box text-center mx-auto py-4">
            <img src={checkImg} alt="check" />
            <h4 className='main-heading'>Congratulations</h4>
            <h6 className='heading'>Your order has been placed</h6>
            <p className="sub-heading">Your order confirmation has sent to 
            <br />
            you email</p>
        </Card>
        </Container>
    </StyledOrderPlaced>
  )
}

export default OrderPlaced