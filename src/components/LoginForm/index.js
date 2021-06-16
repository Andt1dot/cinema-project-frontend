import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import ResetModal from "../ResetModal";
import "./index.css";

const LoginForm = ({ handleOnSubmitLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    handleOnSubmitLogin(email, password);
    //setEmail("");
    //setPassword("");
  };

  return (
    <div className="wrapper">
      <form onSubmit={onSubmitForm} className="styled-form">
        <h1 className="title">Login</h1>
        <input
          onChange={handleEmailChange}
          value={email}
          type="email"
          placeholder="Email"
          className="styled-input"
        ></input>
        <input
          onChange={handlePasswordChange}
          value={password}
          type="password"
          placeholder="Password"
          className="styled-input"
        ></input>

        <Link to="/login/reset-password">
          <h3 className="styled-h3">Ați uitat parola?</h3>
        </Link>

        <button
          type="submit"
          onClick={onSubmitForm}
          className="styled-button signIn"
        >
          Sign-In
        </button>
        <hr className="styled-hr" />
        <Link to="/register">
          <button type="button" className="styled-button signUp">
            Sign-Up
          </button>
        </Link>
      </form>

      <Switch>
        <Route path="/login/reset-password" component={ResetModal} />
      </Switch>
    </div>
  );
};

export default LoginForm;
