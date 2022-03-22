import React from "react";
import { Link } from "react-router-dom";
import LabelInputs from "./LabelInputs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

const FormContainer = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler} className="form-container">
      <div className="form-header">
        <p style={{ fontWeight: "500", fontSize: "20px" }}>
          Welcome to{" "}
          <span className="blue" style={{ fontWeight: "600" }}>
            LOREM
          </span>
        </p>
        <small>
          <span style={{ color: "#8D8D8D" }}>No Account ?</span> <br />
          <span className="blue">Sign up</span>
        </small>
      </div>
      <h2 style={{ fontSize: "50px", fontWeight: "500" }}>Sign in</h2>
      <div className="social-media-signup">
        <div className="google">
          <FcGoogle /> Sign in with Google
        </div>
        <div className="small-btn fb">
          <FaFacebook />
        </div>
        <div className="small-btn github">
          <FaApple />
        </div>
      </div>
      <div className="form-inputs">
        <LabelInputs
          label="Enter your username or email address"
          placeholder="Username or email address"
          htmlFor=" email"
        />
        <LabelInputs
          label="Enter your Password"
          placeholder="Password"
          htmlFor="password"
        />
        <small className="forgot-pass">Forgot Password?</small>
      </div>
      <Link className="submit-btn" to="/dashboard">
        Sign in
      </Link>
    </form>
  );
};

export default FormContainer;
