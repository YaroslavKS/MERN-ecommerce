import React from 'react';
import './login.css';

function LoginPage() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Login</h2>
      <form className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
