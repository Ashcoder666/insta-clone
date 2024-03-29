
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Homepage from './pages/Homepage'
import Addpost from './pages/Addpost'

function App() {
  return (
   <Router>
     <Routes>

    <Route path='/' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/homepage' element={<Homepage />} />
    <Route path='/addpost' element={<Addpost />} />




     </Routes>


   </Router>
  );
}

export default App;
