import React, { useEffect, useState } from 'react';
import './Home.css'; // For styling later
import { Link } from 'react-router-dom'; 

export default function Home({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log("📦 Products loaded:", data.products);
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
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
              <Link to={`/product/${product.id}`}>
              <img 
                src={product.thumbnail} 
                alt={product.title}
                />
              <h3>{product.title}</h3>
              </Link>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
