import React, { useEffect, useState } from 'react'

import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';

function App() {
  
  return (
    <Router>
    <div >
    <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>} />
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;