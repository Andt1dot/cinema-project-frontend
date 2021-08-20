import React from "react";
import "./index.css";

const EmailForm = () => {
  return (
    <form action="mail.php" method="post">
      <div class="card">
        <div class="card-header p-0 m-0">
          <div class="bg-dark text-white text-center py-2 rounded-1">
            <h3>
              <i class="fa fa-envelope"></i> Mesagerie electronică
            </h3>
            <p class="m-0">Cu ce vă putem ajuta ? </p>
          </div>
        </div>
        <div class="card-body p-3">
          <div class="form-group">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fa fa-user text-dark"></i>
                </div>
              </div>
              <input
                type="text"
                class="form-control"
                id="nombre"
                name="nombre"
                placeholder="Numele"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fa fa-envelope text-dark"></i>
                </div>
              </div>
              <input
                type="email"
                class="form-control"
                id="nombre"
                name="email"
                placeholder="Adresa electronică"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fa fa-comment text-dark"></i>
                </div>
              </div>
              <textarea
                class="form-control"
                placeholder="Textul mesajului"
                required
              ></textarea>
            </div>
          </div>

          <div class="text-center">
            <input
              type="submit"
              value="Expediază"
              class="btn btn-warning  btn-block rounded-10"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EmailForm;
