import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Upload from './Pages/Upload/Upload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/upload' exact element={<Upload />} />
        <Route path='/video/:id' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
