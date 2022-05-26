import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../Product/Product'
import { ProductsStyledMain } from './StyledProducts'

const Products = ({products }) => {
    return (
        <ProductsStyledMain>
            <Container>
                <div className="products">
                    <Row className='justify-content-center'>
                        {
                            products.map((data, index) => (
                                <Col sm={6} md={4} lg={3} key={index} className='mt-3 mt-md-0'>                          
                                    <Product  data={data} index={index}/>
                               
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