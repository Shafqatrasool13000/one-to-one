import styled from 'styled-components';

export const StyledTestomonial=styled.div`
background-color: #E4E4E4;
padding:37px 0;
position: relative;
.slide-img{
width:40px;
height:40px;    
}
.prev-slide-img{
position: absolute;
left:3%;
top:50%;
z-index: 30;

}
.next-slide-img{
position: absolute;
right:3%;
top:50%;
z-index: 30;

}
.testomonials{
margin-top:40px;    
}
.title{
font-family: 'EnnVisionsBold';
font-weight:bold;
color: #363636;
font-size: 32px;
}
.card{
background-color:#363636 ;
border:none;
border-radius: 10px;
color: #FFFFFF;
.intro-section{
margin:0 auto;   
p,h6{
margin:0;
color: #FFFFFF;
}
.profile-img{
width:70px;
height:70px;   
border-radius:50%;
}
.intro-section{
.designation{
font-size:12px ;
}    
}    
}
.card-text{
 font-size:13px;  
 margin-top:25px 
}
}
`