import styled from 'styled-components';
export const FooterStyledMain=styled.div`
background-color: #363636;

.footer-section{
color: #FFFFFF;
padding:40px 0;  
}

.logo-section{
.logo{
width:70% ;
}    
.description{
margin-top:16px; 
font-size:12px ;
}

.social-icons{
 margin-top:12p;
.icon{
width:40px;
}  
.icon:not(:first-child){
margin-left:35px;
}  
}

.contact-section{
margin-top:25px;    
img{
width:35px;
}
.contact:last-child{
margin-top:12px;
}    
p{
margin:0;
margin-left:32px;
}
}
}

.quick-links{
.title{
    font-size:24px;    
}    
ul{
list-style:none ;
padding-left:0 ;
li{
margin-top:20px ;
}
}    
}
.news-section{
.title{
    font-size:24px;    
}    

}

.copyright-section{
background-color:#010016;
.copyright{
padding:20px 0;
color: #EAEAEA;
margin-bottom: 0;
}    
}
`