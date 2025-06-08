import React from 'react';
import './productcard.css';

function ProductCard({ product }) {
  return (
    <div className="card product-card">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <button className="btn btn-primary w-100">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
