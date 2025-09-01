import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Safely access auth state with default values
  const authState = useSelector((state) => state.auth || {});
  const { loading = false, error = null } = authState;

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials)).then((success) => {
      if (success) navigate("/products");
    });
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  // In the password input field, add autocomplete attribute
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    autoComplete="current-password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>
              <div className="text-center mt-3">
                <small>Demo credentials: admin / password123</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
