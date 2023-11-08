import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from './pages/Home'
import Error404 from './pages/404'
import Contact from './pages/Contact'
import Mentions from './pages/Mentions'
import Photos from './pages/Photos'
import CalendarBack from './pages/CalendrierBack'

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path = "/" element ={<Home />} />
      <Route path = "/contact" element ={<Contact />} />
      <Route path = "/mentionslégales" element ={<Mentions />} /> 
      <Route path = "/photos" element ={<Photos />} /> 
      <Route path="/calendar" element={<CalendarBack />} />
      <Route path = "*" element ={<Error404 />} /> 
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);
