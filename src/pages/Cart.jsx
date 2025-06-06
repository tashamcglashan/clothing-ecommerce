import React from 'react';
import './Cart.css';

export default function Cart({ cartItems, removeFromCart }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  const addToCart = (item) => {
    console.log("Added to cart:", item);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-card">
                <img src={item.thumbnail} alt={item.title} className="cart-img" />
                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}
