import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Create from './pages/Create';
import Category from './Components/Category';
import Login from './pages/Login';
import Signup from './pages/Singup';
import Cart from './pages/Cart'; 
import { useAuthContext } from './hooks/useAuthContext';
const App = () => {
  const { user } = useAuthContext();
  return (
    <div className='App'>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            {!user && <Route path="/login" element={<Login />} />}
            {!user && <Route path="/signup" element={<Signup />} />}
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/cart" element={<Cart />} /> 
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
