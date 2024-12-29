import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../api/authApi";
import { loginSuccess } from "../features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login({ email, password });
      dispatch(loginSuccess(token));
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow">
        <h2 className="mb-4 text-xl font-bold">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border"
        />
        <button type="submit" className="w-full py-2 text-white bg-blue-500">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
