import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <div className="product-page container py-5">
      <h2 className="mb-4 text-center">Product Details</h2>
      <div className="row">
        <div className="col-md-6 text-center">
          <img src="https://via.placeholder.com/300" alt="Product" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h3>Sample Product</h3>
          <p className="text-muted">Category: Electronics</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut purus nec justo hendrerit dignissim.</p>
          <h4 className="text-primary">$99.99</h4>
          <button className="btn btn-success mt-3">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
