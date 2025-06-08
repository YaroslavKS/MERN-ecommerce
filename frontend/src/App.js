import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/">YK Shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">Cart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero d-flex align-items-center justify-content-center text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to YK Shop</h1>
          <p className="lead">Discover the best deals on your favorite products</p>
          <a href="/products" className="btn btn-primary btn-lg mt-3">Shop Now</a>
        </div>
      </header>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <small>© {new Date().getFullYear()} YK Shop. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
