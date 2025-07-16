
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
   <>
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <Link to="/forgot" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
   </>
  );
};

export default Login;
