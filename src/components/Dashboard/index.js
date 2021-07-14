import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import "./index.css";

const Dashboard = ({ children }) => {
  //console.log("children.props.children", children.props.children);
  return (
    <div className="main-container">
      <Header />
      <div className="container-fluid ">
        <div className="row">
          <Navbar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 ">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div>

            <div className="main-div">{children}</div>
          </main>
        </div>
      </div>
    </div> //main-container
  );
};

export default Dashboard;
