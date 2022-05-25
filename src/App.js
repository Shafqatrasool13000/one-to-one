import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage';
import Shop from './components/Shop/Shop';
import ProductDetails from './components/ProductDetails/ProductDetails';
import MyCart from './components/MyCart/MyCart';
import BillingDetails from './components/BillingDetails/BillingDetails';
import OrderPlaced from './components/OrderPlaced/OrderPlaced';



function App() {

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contact' element={<LandingPage/>}/>
      <Route path='/about' element={<Shop/>}/>
         <Route path='/products/:id' element={<ProductDetails/>}/>
         <Route path='/myCart' element={<MyCart/>}/>
         <Route path='/billing-details' element={<BillingDetails/>}/>
         <Route path='/order-placed' element={<OrderPlaced/>}/>
    </Routes>

  );
}

export default App;
