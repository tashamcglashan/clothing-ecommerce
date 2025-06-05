import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/fetchProducts';
import './Home.css'; // For styling later

export default function Home({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      console.log("📦 Products loaded:", data);
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <div className="home-page">
      <h2>New Arrivals</h2>
      <div className="product-grid">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img 
                src={product.image} 
                alt={product.title}
/>

              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
