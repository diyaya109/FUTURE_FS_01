import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">MyShop</Link>
        <div>
          <Link className="btn btn-outline-light me-2" to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
