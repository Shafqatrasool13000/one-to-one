import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { StyledMyCartMain } from './StyledMyCart';
import check from '../../assets/icons/ic_check.svg';
import uncheck from '../../assets/icons/ic_uncheck.svg';
import blackGloves from '../../assets/icons/redgloves.png'
import deleteImg from '../../assets/icons/ic_delete_item.svg';
import add from '../../assets/icons/ic_item_add.svg';
import remove from '../../assets/icons/ic_item_remove.svg';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Navbars2 from '../Navbar/Navbar2';

const MyCart = () => {
    return (
        <StyledMyCartMain>
            <Navbars2/>
            <Container>
                <h4 className='main-heading'>My Cart</h4>
                <Row>                  
                    <Col sm={6} md={8}>
                    {
                    [1,2,3].map((data,index)=>(
                        <div key={index} className="left-side mt-20">
                        <Row className='align-items-center '>
                            <Col className='col' md={8} >
                                <div className="about-product d-flex align-items-center">
                                    <div className="select-img">
                                        <img src={check} alt="check" />
                                    </div>
                                    <div className="product-img">
                                        <img src={blackGloves} alt="product" />
                                    </div>
                                    <div className="product-title">
                                        <h6 className='name'>Product Name</h6>
                                        <h6 className="price">$20.00</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className='col d-flex justify-content-end me-4 me-sm-0'>
                                <div className="crud-section">
                                    <div className="delete-section d-flex">
                                        <img className='delete-img' src={deleteImg} alt="delete" />
                                        <a href="#action" className="ms-2  remove-link">Remove</a>
                                    </div>
                                    <div className="d-flex counter-section align-items-center">
                                        <img src={add} alt="add" className='me-4'/>
                                        <p className="count mt-3">1</p>
                                        <img src={remove} alt="remove" className='ms-4'/>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                        </div>
                    ))    
                    }  
                    </Col>
                    <Col sm={6} md={4}>

                        <div className="order-summary">
                        <h5 className="title">Order Summary</h5>
                        <div className="order-no d-flex">
                            <p className="order">Order No#:</p>
                            <p className="number">125478635</p>
                        </div>
                        <p className="sub-total">Subtotal (1 Item)</p>
                        <p className="total">Total</p>
                        <div className="d-flex">
                            <Link to='/billing-details'>
                        <button className="w-100 checkout-btn ">Proceed To Checkout</button>
                            </Link>
                        </div>

                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-section">
                <Footer/>
            </div>
        </StyledMyCartMain>
    )
}

export default MyCart