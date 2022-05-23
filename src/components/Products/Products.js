import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../Product/Product'

import { ProductsStyledMain } from './StyledProducts'

const Products = ({ title, products }) => {

    return (
        <ProductsStyledMain>
            <Container>
                <div className="first-section d-flex justify-content-between align-items-center">
                    <h5 className="title">{title}</h5>
                    <a href="#action" className="link">View All</a>
                </div>
                <div className="products">
                    <Row>
                        {
                            products.map((data, index) => (
                                <Col sm={6} md={3} key={index} className='mt-3 mt-md-0'>
                                    <Product data={data} />
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </Container>
        </ProductsStyledMain>
    )
}

export default Products