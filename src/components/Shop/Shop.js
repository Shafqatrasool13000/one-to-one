import { Input } from 'antd'
import React, { useState } from 'react'
import { StyledShopMain } from './StyledShop'
import Products from '../Products/Products';
import { AlignRightOutlined, SearchOutlined } from '@ant-design/icons';
import { Container } from 'react-bootstrap';

import blackgloves from '../../assets/icons/blackgloves.png';
import groinBlack from '../../assets/icons/groin-black.png';
import groinRed from '../../assets/icons/groin-red.png';
import redgloves from '../../assets/icons/redgloves.png';
import fillHeart from '../../assets/icons/ic_like_sel.svg';
import emptyHeart from '../../assets/icons/ic_like.svg';
import Footer from '../Footer/Footer';
import Navbars2 from '../Navbar/Navbar2';
import Filter from '../Filter/Filter';

const Shop = () => {
  const handProtectProducts = [{
    img: redgloves, emptyHeart: emptyHeart
  }, {
    img: blackgloves, fillHeart: fillHeart
  }, {
    img: redgloves, emptyHeart: emptyHeart, discount: '50% OFF'
  }, {
    img: blackgloves, fillHeart: fillHeart
  }];
  const gainProtectProducts = [{
    img: groinRed, emptyHeart: emptyHeart
  }, {
    img: groinBlack, fillHeart: fillHeart, discount: '50% OFF'
  }, {
    img: groinRed, emptyHeart: emptyHeart
  }, {
    img: groinBlack, fillHeart: fillHeart, discount: '50% OFF'
  }];
  const [show, setShow] = useState(false);
  return (
    <StyledShopMain>
      <div className="shop-nav">
        <Navbars2 />
      </div>
      <Container>
        <div className="first-section d-sm-flex justify-content-between 
d-block
mt-40 ">
          <h5 className='title'>Hand Protection</h5>
          <div className="search-bar d-flex">
            <Input placeholder="Search here" prefix={<SearchOutlined color='#666666' />} />
            <div className="ms-2 filter">
              <AlignRightOutlined onClick={() => setShow(!show)} />
            </div>
          </div>


        </div>
        <div className={`${show ? 'filter mt-3' : 'd-none'}`}>
          <Filter />
        </div>
      </Container>
      <div className="mt-40">
        <Products products={handProtectProducts} />
      </div>
      <div className="mt-40">

        <Products products={gainProtectProducts} />
      </div>
      <div className="mt-40">

        <Products products={gainProtectProducts} />
      </div>
      <div className="mt-40">

        <Products products={handProtectProducts} />
      </div>
      <div className="footer-shop">
        <Footer />
      </div>
    </StyledShopMain>
  )
}

export default Shop