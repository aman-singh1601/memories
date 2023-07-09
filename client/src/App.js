import React, { useEffect, useState } from 'react'

import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';


import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import { PostDetail } from './components/PostDetail/PostDetail';

function App() {

  const user=JSON.parse(localStorage.getItem('profile'))
 
  return (
    <Router>
    <div >
    <Header/>
      <Routes>
      <Route path='/' element={<Navigate to="/posts" />}/>
      <Route path='/posts' element={<Home/>} />
      <Route path='/posts/search' element={<Home/>} />
      <Route path='/posts/:id' element={<PostDetail/>} />
      <Route path='/auth' element={(!user ? <Auth/> : <Navigate to="/posts" />)} />
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;