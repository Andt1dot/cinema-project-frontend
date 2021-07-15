import React from "react";
import "./index.css";

const ResetPasswordForm = () => {
  return (
    <div class="styled-form">
      <div class="card-header password-card-header">
        <h3 class="mb-0">Resetare parolă</h3>
      </div>
      <div class="card-body">
        <form class="form" role="form" autocomplete="off">
          <div class="form-group">
            <label className="label-reset" for="inputPasswordOld">
              Parola nouă:
            </label>
            <input
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
              type="password"
              class="form-control"
              id="inputPasswordNew"
              required=""
            ></input>
          </div>

          <div class="form-save">
            <button
              type="submit"
              class="styled-button signIn save-new-password "
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
