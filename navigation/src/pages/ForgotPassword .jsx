
import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword  = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1">Enter your registered email</label>
            <input
              type="email"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Email address"
            />
          </div>
          <button className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition">
            Send Reset Link
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Back to{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword ;
