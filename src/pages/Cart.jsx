import React from 'react';

export default function Cart({ cartItems }) {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
// Note: This is a simple cart page component that displays items in the cart.