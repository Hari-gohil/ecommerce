import React, { useState } from "react";
import { loginUser } from "../api/api";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleLogin() {
    if (!email || !password) {
      return setError("Please fill all fields.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return setError("Please enter a valid email.");
    }

    try {
      setLoading(true);
      setError("");

      const { data } = await loginUser({
        email,
        password,
      });

      // Save JWT + user info
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          token: data.token, // JWT from backend
          id: data._id, // User ID from backend
          name: data.name, // Optional, for display
          email: data.email, // Optional
        }),
      );

      // Redirect after login
      // navigate("/");
      navigate("/home");
      console.log("Login successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="Right_part_con">
      <div id="con2">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "LOGIN"}
        </button>
      </div>
    </div>
  );
};

export default Signin;
