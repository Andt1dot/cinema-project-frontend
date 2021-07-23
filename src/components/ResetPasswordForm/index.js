import React, { useState } from "react";
import "./index.css";
import { resetPassword } from "../../actions/Auth/ResetPassword";
import { useParams } from "react-router-dom";

const ResetPasswordForm = () => {
  const params = useParams();

  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const onSubmitResetPassword = (e) => {
    e.preventDefault();
    resetPassword(params.user_id, password.confirmPassword).then((response) => {
      console.log("Modificat Login", response);
    });
  };

  return (
    <div class="styled-form">
      <div class="card-header password-card-header">
        <h3 class="mb-0">Resetare parolă</h3>
      </div>
      {password.password !== password.confirmPassword &&
      password.confirmPassword ? (
        <p className="error-message">*Parola de confirmare nu concide*</p>
      ) : null}
      <div class="card-body">
        <form class="form" role="form" autocomplete="off">
          <div class="form-group">
            <label className="label-reset" for="inputPasswordOld">
              Parola nouă:
            </label>
            <input
              name="password"
              onChange={(e) =>
                setPassword({ ...password, [e.target.name]: e.target.value })
              }
              type="password"
              class="form-control"
              id="inputPasswordOld"
              required=""
            ></input>
          </div>
          <div class="form-group">
            <label className="label-reset" for="inputPasswordNew">
              Confirmare parolă:
            </label>
            <input
              name="confirmPassword"
              onChange={(e) =>
                setPassword({ ...password, [e.target.name]: e.target.value })
              }
              type="password"
              class="form-control"
              id="inputPasswordNew"
              required=""
            ></input>
          </div>

          <div class="form-save">
            <button
              type="submit"
              class="styled-button signIn save-new-password"
              onClick={onSubmitResetPassword}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
