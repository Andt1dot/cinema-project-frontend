import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import H3 from "../components/H3";
import Modal from "../components/Modal";
import ReactDom from "react-dom";
const ResetModal = () => {
  return ReactDom.createPortal(
    <Modal>
      <H3 text="Introduceți adresa de email pe care ați folosit-o la înregistrare " />
      <Input type="Email" />
      <Button type="submit" text="Send" />
    </Modal>,

    document.querySelector("#modal-reset")
  );
};
export default ResetModal;
