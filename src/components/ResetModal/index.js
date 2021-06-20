import React from "react";
import { Modal, Button } from "react-bootstrap";

const ResetModal = (props) => {
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
          Resetarea Parolei
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ color: "black" }}>
          Introduceți adresa de email pe care ați folosit-o la înregistrare
        </p>
        <input type="email" className="styled-input" />
      </Modal.Body>
      <Modal.Footer>
        <Button>Trimite</Button>
        <Button onClick={props.onHide} style={{ background: "red" }}>
          Anuleaza
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ResetModal;
