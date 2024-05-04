import React, { useState } from "react";
import "./Register.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Register component`
const Register = ({ isLoggedIn, setIsLoggedIn }) => {
  // States for email, password, and confirmPassword
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // Function to handle registration and navigate to the browse page
  const handleRegister = (e) => {
    e.preventDefault();

    console.log("Registration details:", { email, password });

    navigate("/");
    setIsLoggedIn(true);
  };

  return (
    <div className="login-container">
      <div className="field-container">
        <div className="create-account-text">
          <h1>Create an account!</h1>
        </div>
        {/* Form fields for registration */}
        <form onSubmit={handleRegister}>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Button to submit the form */}
          <div className="button-container">
            <Button variant="secondary" size="lg" type="submit">
              Create your account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
