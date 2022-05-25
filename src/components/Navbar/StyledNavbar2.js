import styled from 'styled-components';
export const Navbar2StyledMain=styled.div`
    .authenticate-buttons-scroll{
    margin-top: 4px !important;
    }
.scroll {
background-color: black;
.nav-link{
 color:white !important;   
 
}
}
@media screen and (max-width:480px) {
position: static;
}
position: fixed;
width: 100%;
z-index:50;
.authenticate-buttons{
margin-top: 16px;
.signup-btn{
color: #FFFFFF;
font-size:16px;
background-color: #ED1C24;
margin-right: 20px;
@media screen and (max-width:480px) {
 background-color: black;
 color:white;

}
}   
.login-btn{
background:transparent;
font-size:16px;
border: 1px solid #ED1C24;
color: #ED1C24;
margin-right: 88px;
@media screen and (max-width:480px) {
 background-color: red;
 color: white;

}
} 
}
.navbar-expand-lg .navbar-nav .nav-link{
 color:#363636;   
}
.navbar-nav{
.active{
border-bottom:1px solid #D50008;
color: #D50008 !important;
@media screen and (max-width:480px) {
 width:10%;   
}
}    
}

@media (min-width: 992px){
.navbar-expand-lg .navbar-nav .nav-link{
padding:0;      
margin-left: 55px;

}    

}
`