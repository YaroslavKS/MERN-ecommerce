import React from 'react';
import './Cart.css';

const Cart = () => {
  return (
    <section className="cart-page container py-5">
      <h2 className="mb-4 text-center fw-bold">Shopping Cart</h2>

      <div className="table-responsive">
        <table className="table table-hover align-middle text-center">
          <thead className="table-light">
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Qty</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sample Product</td>
              <td>2</td>
              <td>$50</td>
              <td>$100</td>
            </tr>
            {/* dynamic generic products here mb */}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-end align-items-center flex-column flex-md-row mt-4 gap-3">
        <h4 className="mb-0 fw-semibold">Total: $100</h4>
        <button className="btn btn-primary px-4">Proceed to Checkout</button>
      </div>
    </section>
  );
};

export default Cart;
