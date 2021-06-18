import React from "react";
import "./index.css";

const RegisterForm = () => {
  return (
    <div className="wrapper">
      <form className="styled-form">
        <h1 className="title">Register</h1>
        <input
          type="text"
          placeholder="Firstname"
          className="styled-input"
        ></input>
        <input
          type="text"
          placeholder="Lastname"
          className="styled-input"
        ></input>
        <input
          type="email"
          placeholder="Email"
          className="styled-input"
        ></input>
        <input
          type="text"
          placeholder="Username"
          className="styled-input"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="styled-input"
        ></input>
        <input
          type="mobile"
          placeholder="Phone"
          className="styled-input"
        ></input>
        <button className="styled-button signUp">Sign-Up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
