import React from 'react'
import { Card } from 'react-bootstrap'
import { ProductStyledMain } from './StyledProduct';


const Product = ({ data }) => {
    return (
        <ProductStyledMain>

            <Card>
                <div className='position-relative'>
                    <div className="img-heart">
                        {data?.fillHeart ? (
                            <img src={data.fillHeart} alt="" />) : (
                            <img src={data.emptyHeart} alt="empty" />
                        )
                        }
                    </div>
                    {
                        data?.discount && (
                            <div className="text-discount">
                                <p className="discount">
                                    50% OFF
                                </p>
                            </div>
                        )

                    }
                    <Card.Img variant="top" src={data.img} />
                </div>
                <Card.Body>
                    <Card.Title>
                        <div className="d-flex justify-content-between">
                            <p className="product-name">Product Name</p>
                            <p className="product-price">$20</p>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting.
                    </Card.Text>
                </Card.Body>
            </Card>

        </ProductStyledMain>
    )
}

export default Product