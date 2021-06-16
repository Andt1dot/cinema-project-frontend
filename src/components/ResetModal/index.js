import React from "react";
import ReactDom from "react-dom";

const ResetModal = () => {
  return ReactDom.createPortal(
    <div className="wrapper">
      <div className="modal-div">
        <h3 className="styled-h3">
          Introduceți adresa de email pe care ați folosit-o la înregistrare
        </h3>
        <input type="Email" className="styled-input" />
        <button type="submit" className="styled-button">
          Send
        </button>
      </div>
    </div>,

    document.querySelector("#modal-reset")
  );
};
export default ResetModal;
