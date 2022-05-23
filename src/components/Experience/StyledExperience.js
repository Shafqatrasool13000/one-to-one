import styled from 'styled-components';
import banner from '../../assets/icons/ic_shop_banner.svg';

export const StyledExperienceMain=styled.div`
position: relative;
background-image: url(${banner});
background-repeat: no-repeat;
height:400px;

background-size: cover;
.text-section{
position:absolute;    
top: 50%;
transform: translateY(-20%);
padding-bottom: 50px;
.mini-title{
color: #FFFFFF;
margin:0;
font-weight: 400;
}
.title{
font-weight:bold;
color: #FFFFFF;
margin:0;

}
.shop-btn{
background-color:#ED1C24;
color:#FFFFFF;
margin-top: 20px;
}
}
`