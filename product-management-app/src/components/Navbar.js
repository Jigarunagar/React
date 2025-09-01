import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Safely access auth state with default values
  const authState = useSelector((state) => state.auth || {});
  const { isAuthenticated = false, user = null } = authState;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Product Manager
        </Link>
        
        <div className="navbar-nav ms-auto">
          {isAuthenticated ? (
            <>
              <Link className="nav-link" to="/products">
                Products
              </Link>
              <Link className="nav-link" to="/add-product">
                Add Product
              </Link>
              <span className="nav-link">Welcome, {user?.username}</span>
              <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;