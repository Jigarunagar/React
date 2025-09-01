import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import { checkAuthStatus } from './redux/actions/authActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// Component to handle authentication check
const AuthChecker = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  return null;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AuthChecker />
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/products"
              element={
                <PrivateRoute>
                  <ProductList />
                </PrivateRoute>
              }
            />
            <Route
              path="/add-product"
              element={
                <PrivateRoute>
                  <ProductForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <ProductList />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;