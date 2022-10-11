import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-content">
      <section className="login">
        <form className="login-form" id="login">
          <h3 className="form-title">Login</h3>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              name="Email Address"
              id="Email"
              autoComplete="off"
              placeholder="Your Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Password"></label>
            <input
              type="text"
              name="password"
              id="email"
              autoComplete="off"
              placeholder="Password"
            />
          </div>
        </form>
      </section>
      <Button onClick={() => navigate("/home")} variant="outlined">
        Login
      </Button>
    </div>
  );
};
export default Login;
