import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { StyledProductsHeading } from './StyledProductHeading'

const ProductsHeading = ({title}) => {
    return (
        <Container>
        <StyledProductsHeading >
            <h5 className="title">{title}</h5>
            <Link to="/shop" className="link">View All</Link>
        </StyledProductsHeading>
        </Container>
    )
}

export default ProductsHeading