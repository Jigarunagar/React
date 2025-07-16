import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup ";
import ForgotPassword from "./pages/ForgotPassword ";

function App() {
  return (
    <Router>
      <Header />
      <main className="p-4">
         <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
