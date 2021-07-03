import React, { useState } from "react";
import { Link } from "react-router-dom";
import { requestLogin } from "../../actions/Auth";
import { useDispatch } from "react-redux";
import ResetModal from "../ResetModal";
import "./index.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(requestLogin(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-wrapper">
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

        <h3 className="styled-h3" onClick={() => setModalShow(true)}>
          Ați uitat parola?
        </h3>

        <button
          type="submit"
          onClick={onSubmitForm}
          className="styled-button signIn"
        >
          Sign-In
        </button>
        <Link to="/register">
          <button type="button" className="styled-button signUp">
            Sign-Up
          </button>
        </Link>
      </form>
      <ResetModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default LoginForm;
