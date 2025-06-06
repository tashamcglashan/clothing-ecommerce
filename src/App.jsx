import ProductDetail from './pages/ProductDetail.jsx';
import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import Cart from './pages/Cart.jsx';
import Home from './pages/Home.jsx';
import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
const addToCart = (item) => { 
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  }
  return (
    <>
      <Navbar cartItems={ cartItems} />
      
      <Routes>
      <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        
      </Routes>
    </>
  );
}

export default App;
