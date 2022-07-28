import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { Layout } from '@components/Layout';




const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

      </Route>
    </Routes>
  )
}

export default App;
