import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/signup' element={<SignUp />} />

      </Route>
    </Routes>
  )
}

export default App;
