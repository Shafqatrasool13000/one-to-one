import React from 'react'
import { Container } from 'react-bootstrap'

const ProductsHeading = ({title}) => {
    return (
        <Container>
        <div className="first-section d-flex justify-content-between align-items-center">
            <h5 className="title">{title}</h5>
            <a href="#action" className="link">View All</a>
        </div>
        </Container>
    )
}

export default ProductsHeading