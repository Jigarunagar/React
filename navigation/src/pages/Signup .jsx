
import React from "react";
import { Link } from "react-router-dom";

const Signup  = () => {
  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter your name"
            />
          </div>
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
              placeholder="Create a password"
            />
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup ;
