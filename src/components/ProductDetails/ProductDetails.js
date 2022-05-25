import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { StyledProductDetails } from './StyledProductDetails';
import blackGloves from '../../assets/icons/blackgloves.png';
import drop_down from '../../assets/icons/ic_drop_down.svg';
import { Link } from 'react-router-dom';
import cart from '../../assets/icons/ic_cart.svg'
import blackgloves from '../../assets/icons/blackgloves.png';
import redgloves from '../../assets/icons/redgloves.png';
import fillHeart from '../../assets/icons/ic_like_sel.svg';
import emptyHeart from '../../assets/icons/ic_like.svg';

import ArrowSlideProducts from '../ArrowSlideProducts/ArrowSlideProducts';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';
import Navbars2 from '../Navbar/Navbar2';

const ProductDetails = () => {
    const handProtectProducts = [{
        img: redgloves, emptyHeart: emptyHeart
    }, {
        img: blackgloves, fillHeart: fillHeart
    }, {
        img: redgloves, emptyHeart: emptyHeart, discount: '50% OFF'
    }, {
        img: blackgloves, fillHeart: fillHeart
    }];
    return (
        <StyledProductDetails>
            <Navbars2/>
            <div className="details-inner-container">
                <Container>
                    <Row>
                        <Col sm={12} md={5}>
                            <div className="product-img ">
                                <img src={blackGloves} alt="gloves" />
                            </div>
                        </Col>
                        <Col sm={12} md={7}>
                            <div className="details-section">
                                <h3 className="main-heading">Product Name</h3>
                                <div className="color-section pb-2 d-flex justify-content-between align-items-center">
                                    <div className="title-section d-flex align-items-center">
                                        <p className="title">Color</p>
                                        <p className="colon">:</p>
                                    </div>
                                    <div className="details d-flex align-items-center">
                                        <p className="color-name me-2 mt-2">Golden</p>
                                        <div className="color-box"></div>
                                        <div className="drop-down ms-3 ">
                                            <img src={drop_down} alt="drop" />
                                        </div>
                                    </div>
                                </div>
                                <div className="quantity-section d-flex pb-1 mt-3 justify-content-between">
                                    <div className="title-section d-flex align-items-center">
                                        <p className="title">Quantity</p>
                                        <p className="colon">:</p>
                                    </div>
                                    <div className="details d-flex align-items-center">
                                        <p className="color-name me-2 mt-2">1pc</p>
                                        <div className="color-box"></div>
                                        <div className="drop-down ms-3">
                                            <img src={drop_down} alt="drop" />
                                        </div>
                                    </div>
                                </div>
                                <div className="size-section pb-1 mt-3 ">
                                    <div className="d-flex inner-data justify-content-between">

                                        <div className="title-section d-flex align-items-center">
                                            <p className="title">Size</p>
                                            <p className="colon">:</p>
                                        </div>
                                        <div className="details d-flex align-items-center">
                                            <Link to='#action' className="color-name me-2 mt-2">See Guide</Link>
                                        </div>

                                    </div>
                                    <div className="sizes pb-3">
                                        {['S', 'M', 'L', 'XL'].map((size, index) => (
                                            <button key={index} className={`${index !== 1 ? "btn btn-sm mt-3 mt-lg-0 size-btn " : "btn btn-sm mt-3 mt-lg-0 size-btn selected"}`}>{size}</button>
                                        ))
                                        }
                                    </div>
                                </div>
                                <div className="price-section d-flex justify-content-between mt-3">
                                    <div className="title-section d-flex align-items-center">
                                        <p className="title">Price</p>
                                        <p className="colon">:</p>
                                    </div>
                                    <div className="details ">
                                        <h6 className="color-name text-danger fw-bold ">$20.00</h6>
                                    </div>
                                </div>
                                <div className="cart-buttons d-flex justify-content-between">
                                    <Row >
                                        <Col md={6}>
                                            <div className="d-flex position-relative">
                                                <img src={cart} alt="add-cart" className='position-absolute cart-img' />
                                                <button className="add-btn text-center">
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <Link to='/myCart'>

                                            <button className="buy-now mt-3 mt-md-0">
                                                Buy Now
                                            </button>
                                            </Link>
                                        </Col>


                                    </Row>
                                </div>


                            </div>

                        </Col>
                    </Row>
                    <div className="description-section mt-5">
                        <h5 className="title">Product Description</h5>
                        <p className="details mt-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.</p>
                    </div>
                </Container>
                <div className="related-products">
                    <Container>
                    <h5 className="title">Related Products</h5>
                    </Container>
                    <ArrowSlideProducts>
                    <Products products={handProtectProducts} />
                    </ArrowSlideProducts>
                </div>
                <div className="footer-section">
                    <Footer/>
                </div>
            </div>
        </StyledProductDetails>
    )
}

export default ProductDetails