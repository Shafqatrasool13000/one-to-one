import styled from 'styled-components';

export const FilterStyledMain = styled.div`
.title{
font-family: 'EnnVisionsBold';
font-weight: 400;
color:#363636;
font-size: 18px;
margin-bottom: 13px;
}

.mt-20{
margin-top:20px ;
}
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
.filter-btns .filter  input[type="checkbox"]+label{
border-radius:6px;
border:1px solid #363636;
color:#363636;
margin-left:15px;  
}
.filter-btns .filter  input[type="checkbox"]:checked+label { 
  background-color:#ED1C24;
  color:white;
  border:1px solid #ED1C24;
}

.filter-btns .filter > input{
display: none;
}
.price-section{
  .slidecontainer {
  width: 60%;
}

.slider {
  -webkit-appearance: none;
  width: 60%;
  height: 12px;
  border-radius: 5px;
  background: #363636;
  outline: none;
  opacity: 0.9;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ED1C24;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ED1C24;
  border:none;
  cursor: pointer;
}  
}
.price-section{
.range-inputs{
  font-family: 'EnnVisionsBold';
  font-weight: 500;
input{
  border: 1px solid #363636;
  width: 130px;
  padding: 5px;
  border-radius: 7px;
  font-size: 16px;
}
p{
  font-size: 900;
}
input:last-child{
  margin-left: 13px;
}
}
}
`