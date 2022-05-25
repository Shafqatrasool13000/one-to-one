import styled from 'styled-components';

export const StyledMyCartMain=styled.div`

.main-heading{
color:#363636;
font-family: 'EnnVisionsBold';
font-weight: 700; 
padding-top:100px ;
}
.mt-20{
margin-top:20px;    
}
.left-side{
border-bottom:1px solid #DDDDDD;   
padding-bottom:20px;
}
.about-product{
.select-img{
width:30px;
}
.product-img{
padding:12px;
background-color: #F6F6F6;
margin-left: 36px;
@media screen and (max-width:480px) {
    margin-left: 0;
    
}
img{
width:70px;
}    
} 

.product-title{
margin-left:20px;   
font-family:'EnnVisionsBold';
.name{
 font-weight: 500;
} 
.price{
color:#ED1C24;
font-size:22px;
margin-top: 28px;
}
}
}

.crud-section{
.delete-section{
.delete-img{
width:20px;    
}
.remove-link{
color:#ED1C24;
text-decoration: underline;
}    
}  

.counter-section{
margin-top: 22px;
.count{
font-size:16px;
}    
img{
width:25px;
}    
}
}

.order-summary{
background: #F6F6F652;
border: 2px solid #D6D6D6;
border-radius: 10px;
padding:20px; 
color:#363636;   
.title{
font-size:20px;
font-family: 'EnnVisionsBold';
font-weight: 500;
}
.order-no{
margin-top:15px;
.number{
color:#ED1C24;   
font-family: 'EnnVisionsBold';
font-weight: 500;
}
}
.sub-total{
margin-top:12px;    
}
.total{
margin-top:10px;    
}
.checkout-btn{
margin-top:25px;
background-color:#ED1C24 ;
padding:8px;
color:white;
border-radius: 5px;
}
}

.footer-section{
margin-top:100px;
}
`