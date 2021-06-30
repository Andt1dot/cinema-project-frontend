import React from "react";
import "./index.css";

import { Link } from "react-router-dom";
const ReservationForm = () => {
  return (
    <div>
      <div id="booking" className="section">
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="booking-form">
                <div className="form-header">
                  <h1>Rezerveaza</h1>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        {" "}
                        <input
                          className="form-control"
                          type="date"
                          required
                        />{" "}
                        <span className="form-label">Selecteaza Data</span>{" "}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        {" "}
                        <select className="form-control" required>
                          <option value="" hidden>
                            Selecteaza Ora
                          </option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>{" "}
                        <span className="select-arrow"></span>{" "}
                        <span className="form-label">Ora</span>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        {" "}
                        <select className="form-control" required>
                          <option value="" hidden>
                            Selecteaza Cinematograf
                          </option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>{" "}
                        <span className="select-arrow"></span>{" "}
                        <span className="form-label">Cinematograf</span>{" "}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        {" "}
                        <select className="form-control" required>
                          <option value="" hidden>
                            Selecteaza Sala
                          </option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>{" "}
                        <span className="select-arrow"></span>{" "}
                        <span className="form-label">Sala</span>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="btn-custom">
                      <Link
                        to={`/reservation/60a2c00622ea782e70473748/6094e52f7841b349a4b923d6/6094e6964f88584244ca4ba6?date=2021-06-28&hour=10:00`}
                      >
                        <button className="btn submit-btn">Continua</button>{" "}
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
