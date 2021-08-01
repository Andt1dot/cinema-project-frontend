import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, Button } from "react-bootstrap";
import "./index.css";

const FilterCustom = ({ addButtonTitle, pathName }) => {
  return (
    <>
      <ListGroup horizontal="lg" className="m-0">
        <ListGroup.Item>
          <Link to={pathName}>
            <Button
              className="btn btn-secondary wrn-btn"
              style={{ background: "green" }}
            >
              {addButtonTitle}
            </Button>
          </Link>
        </ListGroup.Item>

        <ListGroup.Item>
          <input
            type="text"
            className="form-control search-slt"
            placeholder="Genre"
          />
        </ListGroup.Item>
        <ListGroup.Item>
          <input
            type="text"
            className="form-control search-slt"
            placeholder="Release Date"
          />
        </ListGroup.Item>
        <ListGroup.Item>
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
        </ListGroup.Item>
        <ListGroup.Item>
          <Button className="btn btn-secondary wrn-btn">Filter</Button>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default FilterCustom;
