import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const FilterCustom = ({ addButtonTitle }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div>
          {" "}
          <Link to="/admin/movies/movie-add">
            <button
              className="btn btn-secondary wrn-btn"
              style={{ background: "green" }}
            >
              {addButtonTitle}
            </button>
          </Link>
        </div>
        <form>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <input
                    type="text"
                    className="form-control search-slt"
                    placeholder="Genre"
                  />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <input
                    type="text"
                    className="form-control search-slt"
                    placeholder="Release Date"
                  />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <select
                    className="form-control search-slt"
                    id="exampleFormControlSelect1"
                  >
                    <option>Age Restrict</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                  </select>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <button className="btn btn-secondary wrn-btn">Filter</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FilterCustom;
