import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { ProductStyledMain } from './StyledProduct';
import fillHeart from '../../assets/icons/ic_like_sel.svg';
import emptyHeart from '../../assets/icons/ic_like.svg';
import { Link,} from 'react-router-dom';

const Product = ({ data,index }) => {
    const [heart, setHeart] = useState(false);

    
    return (
        <ProductStyledMain>

            <Card>
                <div className='position-relative'>
                    <div className="img-heart">
                        {heart? (
                            <img onClick={()=>setHeart(!heart)} src={fillHeart} alt="heart" />) : (
                            <img onClick={()=>setHeart(!heart)} src={emptyHeart} alt="empty" />
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
                    <Link to={`/products/${index}`}>
                    <Card.Img  variant="top" src={data.img} />
     </Link>
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