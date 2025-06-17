import React from 'react';
import './Cart.css';

const Cart = () => {
  return (
    <div className="cart-page container py-5">
      <h2 className="mb-4 text-center">Shopping Cart</h2>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sample Product</td>
            <td>2</td>
            <td>$50</td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>
      <div className="text-end">
        <h4>Total: $100</h4>
        <button className="btn btn-primary mt-3">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
