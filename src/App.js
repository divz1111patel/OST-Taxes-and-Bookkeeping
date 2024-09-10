import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Studenthome from './pages/studenthome';
import Personalhome from './pages/personalhome';
import Coorporatehome from './pages/coorporatehome';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/student" element={<Studenthome />} />
      <Route path="/personal" element={<Personalhome />} />
      <Route path="/coorporate" element={<Coorporatehome />} />
    </Routes>
  </BrowserRouter>
);

export default App;
