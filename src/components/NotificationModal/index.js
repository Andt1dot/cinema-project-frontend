import React from "react";
import { Modal } from "react-bootstrap";

import "./index.css";

const NotificationModal = (props) => {
  return (
    <Modal
      className="modal-client_type"
      onHide={props.onHide}
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      data-backdrop="static"
      centered
    >
      <Modal.Header className="header-title" closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={
            props.messageType === 200 ? { color: "green" } : { color: "red" }
          }
        >
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="info">
          <p>{props.body}</p>
          {props.messageType === 200 ? (
            <i class="fa fa-check-circle"></i>
          ) : (
            <i class="fa fa-times-circle"></i>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default NotificationModal;
