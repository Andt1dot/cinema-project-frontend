import React from "react";
import "./index.css";
import { Modal, Button } from "react-bootstrap";

const UnauthorizedModal = (props) => {
  return (
    <Modal
      onHide={props.onHide}
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="header-unauthorize" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cod 401: Neautorizat
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="body-unauthorize">
        <h4>Stimate vizitator,</h4>
        <p>
          Accesul în continuare se realizează doar cu un cont de utilizator
          valid.
          <p>
            Vă recomandăm să vă autentificați sau să vă înregistrați în sistem.
          </p>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Autentificare</Button>
        <Button onClick={props.onHide}>Înregistrare</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UnauthorizedModal;
