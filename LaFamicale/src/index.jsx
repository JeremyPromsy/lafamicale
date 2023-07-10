import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from './pages/Home'
import Error404 from './pages/404'
import Contact from './pages/Contact'

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Nav />
    <Routes>
      <Route path = "/" element ={<Home />} />
      <Route path = "/contact" element ={<Contact />} />
      <Route path = "*" element ={<Error404 />} /> 
    </Routes>
    <Footer />
    </HashRouter>
  </React.StrictMode>,
);
