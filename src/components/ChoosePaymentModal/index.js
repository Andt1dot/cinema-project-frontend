import React from "react";
import "./index.css";
import { Modal, Button, Form } from "react-bootstrap";
const ChoosePaymentModal = (props) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={true}
      onHide={false}
    >
      <Modal.Header className="title-select-method">
        <Modal.Title>Modalitatea de achitare</Modal.Title>
      </Modal.Header>

      <div class="choose">
        <div className="align-credit-card">
          <label id="male">
            <h6>Achitare cu Cardul:</h6>
            <input name="gender" type="radio" />
            <span>
              <i class="fa fa-credit-card"></i>
            </span>
          </label>
    
        <label id="female">
          <h6>Achitare la casă:</h6>
          <input name="gender" type="radio" />
          <span className="cache-method">
            <i class="fas fa-hand-holding-usd"></i>
          </span>
        </label>
      </div>
      </div>
      <Modal.Footer>
        <Button variant="primary">Ok</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChoosePaymentModal;
