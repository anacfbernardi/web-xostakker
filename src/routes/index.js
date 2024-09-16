import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Relations from '../pages/Relations';
import NotFound from '../pages/NotFound';

function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/following" element={<Relations />} exact />
        <Route path="/followers" element={<Relations />} exact />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
