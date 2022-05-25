import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbars2 from '../Navbar/Navbar2'
import InputField from './InputField'
import { StyledBillingDetailsMain } from './StyledBillingDetails'

const BillingDetails = () => {
  return (
    <StyledBillingDetailsMain>
        <Navbars2/>
      <Container>
       <div className="billing-details">
       <h5 className="heading heading-billing">
       Billing Details
       </h5>
          <Row>
           <Col md={6}>
              <InputField placeholder='' label='First Name'/> 
               </Col>   
           <Col md={6}>
              <InputField placeholder='' label='Last Name'/> 
               </Col>   
           <Col md={6}>
              <InputField placeholder='' label='Email'/> 
               </Col>   
           <Col md={6}>
              <InputField placeholder='' label='Phone'/> 
               </Col>   
           <Col md={12}>
              <InputField placeholder='' label='Address'/> 
               </Col> 
               <Col md={6}>
              <InputField placeholder='' label='Country'/> 
               </Col> 
               <Col md={6}>
              <InputField placeholder='' label='City'/> 
               </Col> 
               <Col md={6}>
              <InputField placeholder='' label='State/Province'/> 
               </Col> 
               <Col md={6}>
              <InputField placeholder='' label='Zip Code'/> 
               </Col>   
             
          </Row>
       </div>
       <div className="payment-details">
       <h5 className="heading">
       Payment Details
       </h5>
       <Row>
       <Col md={6}>
              <InputField placeholder='' label='Name on Card'/> 
               </Col> 
       <Col md={6}>
              <InputField placeholder='' label='Card Number'/> 
               </Col> 
       <Col md={6}>
              <InputField placeholder='' label='Expiry Date'/> 
               </Col> 
       <Col md={6}>
              <InputField placeholder='' label='CVC Number'/> 
               </Col> 
      
       </Row>
       </div>
       <div className="place-order-btn d-flex justify-content-end">
         <Link to='/order-placed'>
           <button className="order-btn">Place Order</button>
         </Link>
       </div>
      </Container>
      <div className="footer-section">
          <Footer/>
      </div>
    </StyledBillingDetailsMain>
  )
}

export default BillingDetails