import React, { useState } from "react";
import "./Login.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Login component
const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Array of dummy test users
  const users = [
    { email: "jack@gmail.com", password: "rEct5u" },
    { email: "tom@gmail.com", password: "UYpVnX" },
    { email: "alice@gmail.com", password: "Bk84tD" },
    { email: "kaylee@gmail.com", password: "ht2KBj" },
    { email: "caleb@gmail.com", password: "GWPAUF" },
  ];

  const navigate = useNavigate();

  // Function to handle login and navigate to the browse page
  const handleLogin = (e) => {
    e.preventDefault();

    const isValidUser = users.some(
      (user) => user.email === email && user.password === password
    );

    if (isValidUser) {
      window.alert("Login successful!");
      navigate("/");
      setIsLoggedIn(true);
    } else {
      window.alert("Invalid email or password.");
      setEmail("");
      setPassword("");
    }
  };

  // Function to navigate to the register page when the register button is clicked
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <div className="field-container">
        <div className="welcome-back-text">
          <h1>Welcome back!</h1>
        </div>
        {/* Form fields for login */}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="button-container">
            <Button variant="secondary" size="lg" type="submit">
              Log In
            </Button>
          </div>
        </form>
        {/* Button to navigate to the register page */}
        <div className="button-container">
          <Button variant="secondary" size="lg" onClick={handleRegister}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
