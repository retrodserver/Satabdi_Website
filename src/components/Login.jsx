import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Accept admin or registered user
    const validAdmin = username === "admin" && password === "admin123";
    const validUser = props.user && props.userPassword && username === props.user && password === props.userPassword;
    if (validAdmin || validUser) {
      toast.success("Login successful!");
      onLogin && onLogin();
      setTimeout(() => {
        navigate("/admin");
      }, 700);
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-6">Admin Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="mb-4 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="mb-6 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full">Login</button>
        <div className="mt-4">
          <span className="text-gray-600 dark:text-gray-300">New user? </span>
          <Link to="/register" className="text-blue-600 hover:underline">Register here</Link>
        </div>
        <ToastContainer position="top-center" autoClose={3000} />
      </form>
    </section>
  );
}

export default Login;
