import React from "react";
import validateSignin from "./validateSignin";
import useSignin from "./useSignin";
import "./Signin.css";
import "./Signin";

const FormSignin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useSignin(
    submitForm,
    validateSignin
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Sign in to your account</h1>

        <div className="form-inputs">
          <label className="form-label">Login as</label>
          <select
            className="form-input"
            name="userType"
            value={values.userType}
            onChange={handleChange}
          >
            <option value="Provider">Provider</option>
            <option value="Traveler">Traveler</option>
          </select>
        </div>

        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Sign In
        </button>
        <span className="form-input-signup">
          Not registered? Sign up <a href="./signup">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignin;
