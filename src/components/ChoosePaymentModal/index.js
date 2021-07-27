import React, { useState } from "react";
import "./index.css";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChoosePaymentModal = (props) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.onShow}
      onHide={props.onHide}
    >
      <Modal.Header className="title-select-method " closeButton>
        <Modal.Title>Alege-ți modalitatea de achitare</Modal.Title>
      </Modal.Header>

      <div class="choose">
        <div className="align-credit-card">
          <div className="male-container">
            <label id="male">
              <input
                name="gender"
                type="radio"
                onChange={(e) => props.setMethodPayment("card")}
              />
              <span className="span-credit-card">
                <i class="fa fa-credit-card"></i>
              </span>
            </label>
            <h6>Achitare cu Cardul</h6>
          </div>
          <div className="female-container">
            <label id="female">
              <input
                name="gender"
                type="radio"
                onChange={(e) => props.setMethodPayment("cache")}
              />
              <span className="cache-method">
                <i class="fas fa-hand-holding-usd"></i>
              </span>
            </label>
            <h6>Achitare la Casă</h6>
          </div>
        </div>
      </div>
      <Button
        onClick={props.handleClickFinishReservation}
        className=" shadow-none select-method-payment"
      >
        Spre achitare
      </Button>
    </Modal>
  );
};

export default ChoosePaymentModal;
