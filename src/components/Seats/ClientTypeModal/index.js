import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./index.css";

const ClientTypeModal = (props) => {
  const [clientType, setClientType] = useState();

  return (
    <Modal
      onHide={props.onHide}
      show={props.show}
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
            onChange={(e) => setClientType(e.target.value)}
          >
            <option value="Alege...">Alege...</option>
            <option value="Copil">Copil</option>
            <option value="Elev">Elev</option>
            <option value="Student">Student</option>
            <option value="Adult">Adult</option>
            <option value="Pensionar">Pensionar</option>
          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={(e) => props.handleClickClientType(clientType)}>
          Selectează
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ClientTypeModal;
