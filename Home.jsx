import React, { useEffect, useState } from 'react';
import './Home.css'; // For styling later
import { Link } from 'react-router-dom'; 
import Hero from '../components/Hero.jsx';
import Filter from '../components/Filter.jsx';


export default function Home({ addToCart, user }) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState ('all');
  

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

  const categories = [ 'all', ...new Set (products.map(p => p.category)) ];
  const filteredProducts = filter === 'all'
  ? products: products.filter(p => p.category === filter);

  console.log ("Current user:", user);

  return (
    <div className="home-page">
    <Hero />
      <h2>New Arrivals</h2>
      {/* Filter component to select product categories */}
      <Filter 
      options = {categories}
      value= {filter}
      onChange={setFilter}
      />

      {/* Display filtered products */}

      <div className="product-grid">
  {filteredProducts.length === 0 ? (
    <p>Loading products...</p>
  ) : (
    filteredProducts.map((product) => (
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
