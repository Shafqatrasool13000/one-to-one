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
import { useState } from 'react';

const MyCart = () => {
    const [products, setProducts] = useState([
        {
            count: 0,
            pName: "Product Name",
            price: "$20.00",
            select: false
        }, {
            count: 0,
            pName: "Product Name",
            price: "$20.00",
            select: false,

        }, {
            count: 0,
            pName: "Product Name",
            price: "$20.00",
            select: false,

        }
    ])


    const changeProduct = (index, value) => {

        if (typeof (value) === 'number') {

            value === 0 && products[index].count > 0 ? products[index].count -= 1 : products[index].count += 1
        } else if (typeof (value) === 'boolean') {
            products[index].select = value
        }

        setProducts([...products]);

    }
    const deleteProduct = (index) => {


        const filteredProduct = products.filter((product, myIndex) => index !== myIndex);
        setProducts(filteredProduct);
    }
    return (
        <StyledMyCartMain>
            <Navbars2 />
            <Container>
                <h4 className='main-heading'>My Cart</h4>
                <Row>
                    <Col sm={6} md={8}>
                        {
                            products.length === 0 ? <h3>No Products Added</h3> : products.map(({ count, pName, price, select }, index) => (
                                <div key={index} className="left-side mt-20">
                                    <Row className='align-items-center '>
                                        <Col className='col' md={8} >
                                            <div className="about-product d-flex align-items-center">
                                                <div className="select-img">
                                                    {
                                                        select ? (

                                                            <img onClick={() => changeProduct(index, !select)} src={check} alt="check" />
                                                        ) : (
                                                            <img onClick={() => changeProduct(index, !select)} src={uncheck} alt="check" />

                                                        )
                                                    }
                                                </div>
                                                <div className="product-img">
                                                    <img src={blackGloves} alt="product" />
                                                </div>
                                                <div className="product-title">
                                                    <h6 className='name'>{pName}</h6>
                                                    <h6 className="price">{price}</h6>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4} className='col d-flex justify-content-end me-4 me-sm-0'>
                                            <div className="crud-section">
                                                <div onClick={() => deleteProduct(index)} className="delete-section d-flex">
                                                    <img className='delete-img' src={deleteImg} alt="delete" />
                                                    <a href="#action" className="ms-2  remove-link">Remove</a>
                                                </div>
                                                <div className="d-flex counter-section align-items-center">
                                                    {
                                                        count === 0 ? (
                                                            <img  src={remove} alt="remove" className='me-4' />
                                                        ) : (<img onClick={() => changeProduct(index, 0)} src={remove} alt="remove" className='me-4' />)

                                                    }
                                                    <p className="count mt-3">{count}</p>
                                                    <img onClick={() => changeProduct(index, 1)} src={add} alt="add" className='ms-4' />

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
                <Footer />
            </div>
        </StyledMyCartMain>
    )
}

export default MyCart