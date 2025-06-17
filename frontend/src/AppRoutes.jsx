import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './assets/Header';
import Footer from './assets/Footer';

import Cart from './pages/CartPage/Cart';
import Login from './pages/LoginPage/Login';
import Product from './pages/ProductsPage/Product';

function AppRoutes() {
  return (
    <Router>
      <Header />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
