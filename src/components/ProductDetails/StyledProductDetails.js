import styled from 'styled-components';

export const StyledProductDetails = styled.div`
.color-box{

width: 90px;
border-radius: 10px;
height: 40px;
cursor: pointer;
}

.colon{
margin-left:100px;

}
.details-inner-container{
padding-top:90px;    

.product-img{
background: #F6F6F6;
padding: 60px;
}
.details-section{

.main-heading{
font-family: 'EnnVisionsBold';
font-weight: 500;
color:#363636;
}    

.color-section{
color:#363636; 
border-bottom: 1px solid #E4E4E4;


.details{
.color-box{
background-color:#E4B965;
width: 90px;
border-radius: 10px;
height: 40px;
}
.drop-down{
width:20x;
height: 20px;
}    
}        
}

.quantity-section{
color:#363636; 
border-bottom: 1px solid #E4E4E4;
}
.size-section{
border-bottom: 1px solid #E4E4E4;
color:#363636; 

.sizes{
margin-top:30px;
.filter-btns .filter> label {
  color:#363636;
  font-style: normal;
  font-weight: 400;
  font-family: 'EnnVisionsBold';
  font-size: 14px;
  color:white;
  border-radius: 7px;
  text-align: center;
padding:7px 15px;
  cursor: pointer;

}
.filter-btns .filter >label:first-child{
margin-left:0 !important;   
}
.filter-btns .filter  input[type="radio"]+label{
border-radius:6px;
border:1px solid #363636;
color:#363636;
margin-left:15px;  
}
.filter-btns .filter  input[type="radio"]:checked+label { 
  background-color:#ED1C24;
  color:white;
  border:1px solid #ED1C24;
}

.filter-btns .filter > input{
display: none;
}

}

}

.price-section{
.details{
color:#ED1C24;    
}    
}

.cart-buttons{
margin-top:30px;
.cart-img{
width:18px;
left:27%;
top:27%;
}
.add-btn{
width:270px; 
height:45px;
background-color:transparent;
border: 2px solid #ED1C24;
color:#ED1C24;
border-radius: 7px;
}
.buy-now:hover{
background-color: white;
color: #363636;
border: 1px solid #ED1C24;
}
.add-btn:hover{
background-color: #363636 ;
color: #FFFFFF;
border: none;   
}
.buy-now{
width:270px; 
height:45px;
background-color:#ED1C24;
border-radius: 7px;
color: #FFFFFF;   
}
}


}
.description-section{
color:#363636;
.title{
font-family: 'EnnVisionsBold';
font-weight: 500;
}
.details{
font-size:14px ;
}
}

.related-products{
margin-top:40px;
.title{
font-family:'EnnVisionsBold' ;
font-weight: 500;
}
}
.footer-section{
margin-top:100px;
}
}
`