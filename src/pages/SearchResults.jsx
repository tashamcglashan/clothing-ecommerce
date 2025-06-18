import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchResults() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://dummyjson.com/products/${id}'); // or your API
      const data = await res.json();
      setProducts(data);

      const filtered = data.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }

    fetchData();
  }, [query]);

  return (
    <div className="search-results">
      <h2>Results for "{query}"</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}
