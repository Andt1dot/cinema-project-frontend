import React from "react";
import "./index.css";

const ReservationForm = ({ premiere }) => {
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
                    <div className="form-btn col-md-6">
                      {" "}
                      <button className="btn submit-btn">Continua</button>{" "}
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
