import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import TxDetail from './pages/TxDetail';



function App() {

  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/tx' element={<TxDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;