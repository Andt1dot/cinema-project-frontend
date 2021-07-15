import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import requestLogin from "../../actions/Auth/LogIn";
import { useDispatch, useSelector } from "react-redux";
import ResetModal from "../ResetModal";

import "./index.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useDispatch();

  const { isAuthenticated, isAdmin, errorMessageLogin } = useSelector(
    (state) => state.Auth
  );
  console.log(isAuthenticated);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(requestLogin(email, password));
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleFormSubmit} className="styled-form">
        <h1 className="title">Login</h1>
        {errorMessageLogin && !isAuthenticated ? (
          <div className="error-message">
            <p>{`* ${errorMessageLogin} *`}</p>
          </div>
        ) : null}
        <input
          onChange={handleEmailChange}
          value={email}
          type="email"
          placeholder="Email"
          className="styled-input input-custom"
        ></input>
        <input
          onChange={handlePasswordChange}
          value={password}
          type="password"
          placeholder="Password"
          className="styled-input input-custom"
        ></input>

        <h3 className="styled-h3" onClick={() => setModalShow(true)}>
          Ați uitat parola?
        </h3>
        <div className="manage-acces">
          {isAuthenticated ? (
            <Link to="/" className="Sign-In">
              <button type="submit" className="styled-button signIn">
                Autentificare
              </button>
            </Link>
          ) : (
            <button type="submit" className="styled-button signIn">
              Autentificare
            </button>
          )}

          <Link to="/register" className=" Sign-Up">
            <button type="button" className="styled-button signUp">
              Înregistrare
            </button>
          </Link>
        </div>
      </form>
      <ResetModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default LoginForm;
