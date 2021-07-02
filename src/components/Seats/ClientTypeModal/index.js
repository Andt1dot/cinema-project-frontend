import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./index.css";
const ClientTypeModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: "black" }}
        >
          Categoria de vîrstă
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="input-group">
          <select
            className="custom-select"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
          >
            <option selected>Alege...</option>
            <option value="1">Copil</option>
            <option value="2">Elev</option>
            <option value="3">Student</option>
            <option value="4">Adult</option>
            <option value="5">Pensionar</option>
          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button>Selectează</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ClientTypeModal;
