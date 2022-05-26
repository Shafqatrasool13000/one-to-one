import styled from 'styled-components';
export const Navbar2StyledMain=styled.div`
.authenticate-buttons-scroll{
margin-top: 4px !important;
}
.scroll {
background-color: white;
box-shadow: 0px 15px 30px rgb(0 0 0 / 10%);

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

}   
.login-btn{
background-color:transparent;
font-size:16px;
border: 1px solid #363636;
color: #363636;
margin-right: 88px;
@media screen and (max-width:480px) {
 background-color: red;
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