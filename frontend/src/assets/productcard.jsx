import React from 'react';
import './Productcard.css';

function ProductCard({ product }) {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card product-card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text fw-semibold text-success mb-4">${product.price}</p>
          <button className="btn btn-primary mt-auto w-100">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
