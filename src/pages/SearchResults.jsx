// src/pages/SearchResults.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';
  
  const [products, setProducts] = useState([]);
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState(null);

  useEffect(() => {
    if (!query) return;            // don’t fetch if empty
    setLoading(true);
    setError(null);

    // ← note the back-ticks and `${query}` interpolation
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setProducts(data.products || []);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to fetch products');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  if (!query)   return <p>Please enter a search term.</p>;
  if (loading)  return <p>Loading results for “{query}”…</p>;
  if (error)    return <p>{error}</p>;
  if (products.length === 0) 
                return <p>No products found for “{query}.”</p>;

  return (
    <div className="search-results">
      <h2>Results for “{query}”</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img 
              src={product.thumbnail || product.images?.[0]} 
              alt={product.title} 
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
