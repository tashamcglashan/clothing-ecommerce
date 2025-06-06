import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        console.log("Loaded product:", data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) return <p className="loading-text">Loading product details...</p>;

  // ✅ Now that product is loaded, it's safe to access rating
  const stars = product?.rating ? Math.round(product.rating) : 0;

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img 
          src={product.images && product.images.length > 0 ? product.images[0] : product.thumbnail} 
          alt={product.title} 
        />
      </div>
      <div className="product-detail-info">
        <h2>{product.title}</h2>
        <div className="star-rating">
          {"★".repeat(stars)}{"☆".repeat(5 - stars)} ({product.rating.toFixed(1)})
        </div>
        <p className="description">{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
