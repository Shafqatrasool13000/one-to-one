import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/Pages/LandingPage';



function App() {

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      {/* <Route path='/signup' element={<Signup/>}/>
        <Route path='/resetPassword' element={<ResetPassword/>}/> */}
    </Routes>

  );
}

export default App;
