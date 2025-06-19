import React from 'react';
import './Product.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Product() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Product;

// const Product = () => {
//   return (
//     <section className="product-page container py-5">
//       <h2 className="text-center mb-5 fw-bold">Product Details</h2>
//       <div className="row g-5 align-items-center">
//         <div className="col-md-6 text-center">
//           <img
//             src="https://via.placeholder.com/300"
//             alt="Product"
//             className="product-img img-fluid rounded shadow-sm"
//           />
//         </div>
//         <div className="col-md-6">
//           <h3 className="fw-semibold">Sample Product</h3>
//           <p className="text-muted mb-2">Category: Electronics</p>
//           <p className="mb-4">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut purus nec justo hendrerit dignissim.
//           </p>
//           <h4 className="text-primary fw-bold mb-4">$99.99</h4>
//           <button className="btn btn-success w-100 w-md-auto">Add to Cart</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Product;
