import styled from 'styled-components';
import bannerBack from '../../assets/icons/ic_banner_img_1.svg';
export const HeroSectionStyled = styled.div`
.text-section{
background-image: url(${bannerBack});
background-repeat: no-repeat;
background-size: cover;
height: 100vh;


.mini-title{
&-text{
font-size:18px;
color: #ED1C24;
font-weight: 700;
}    
&-img{
margin-left:52px;
}
}

.main-heading{
font-size: 44px;
font-weight: 900;
font-family: 'EnnVisionsBold' !important;
color:#363636;
@media screen and (max-width:480px) {
font-size: 27px;
    
}
.journey-start{
font-family:'EnnVisions' ;
}
}
.details{
color: #666666; 
font-size: 16px;
font-weight: 400;
}
.shop-btn{
background-color:#ED1C24;
color: #FFFFFF;
}
}
.img-section{
z-index:100;
width: 90%;
}
`