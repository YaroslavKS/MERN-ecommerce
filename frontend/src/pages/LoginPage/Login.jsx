import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page container d-flex align-items-center justify-content-center">
      <div className="login-form bg-white p-5 rounded shadow">
        <h2 className="mb-4 text-center">Sign In</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
