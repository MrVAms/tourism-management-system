import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-content">
      <section className="signup">
        <form className="register-form" id="register">
          <h3 className="form-title">Sign up</h3>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Your Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Phone"></label>
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="off"
              placeholder="Your number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="work"></label>
            <input
              type="text"
              name="work"
              id="work"
              autoComplete="off"
              placeholder="Your profession"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              type="text"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="Your password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cpassword"></label>
            <input
              type="text"
              name="cpassword"
              id="cpassword"
              autoComplete="off"
              placeholder="Confirm your password"
            />
          </div>
          <div>
            <input
              type="submit"
              name="signup"
              className="form-submit"
              value="Register"
              onClick={() => navigate("/")}
            />
          </div>
        </form>
      </section>
    </div>
  );
};
export default Signup;
