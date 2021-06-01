import React from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import H3 from "../components/H3";
import Modal from "../components/Modal";
import ReactDom from "react-dom";
const ResetModal = () => {
  return ReactDom.createPortal(
    <Modal>
      <Form>
        <H3 text="Introduceți adresa de email pe care ați folosit-o la înregistrare " />
        <Input type="Email" />
        <Button type="submit" text="Send" />
      </Form>
    </Modal>,
    //   <div className="modal">
    //     <div className="modal-delete">
    //       <h1>Are you sure you want to delete the note?</h1>
    //       <div className="modal-manage">
    //         <button className="delete-yes" onClick={onDelete}>
    //           Yes
    //         </button>
    //         <button className="delete-cancel" onClick={onCancel}>
    //           No
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    document.querySelector("#modal-reset")
  );
};
export default ResetModal;
