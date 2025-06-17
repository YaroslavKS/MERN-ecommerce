import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="footer-title">YK Shop</h5>
            <p>Your trusted partner in quality products.</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="footer-title">Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/products" className="footer-link">Products</a></li>
              <li><a href="/cart" className="footer-link">Cart</a></li>
              <li><a href="/login" className="footer-link">Login</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Contact</h5>
            <p>Email: support@ykshop.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <hr className="footer-divider" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} YK Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
