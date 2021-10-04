import React, { useState, useMemo, useCallback } from "react";
import { Modal, Button } from "react-bootstrap";
import "./index.css";

const UserDetails = ({ onShow, onHide, userData }) => {
  const [input, setInput] = useState(onShow);

  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  console.log("rendering...", input);

  const onClickState = (e) => {
    setInput(userData);
    console.log(input);
  };

  return (
    <Modal
      onHide={onHide}
      show={onShow}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="body-details">
        <div className="d-flex flex-row mt-2 mb-2 align-items-center gap-2">
          <label>Numele:</label>{" "}
          <input
            className="form-control"
            type="text"
            name="firstname"
            onChange={onChangeInput}
            defaultValue={userData.lastname}
            required
            disabled={input.disabled}
          ></input>
        </div>
        <div className="d-flex flex-row mt-2 mb-2 align-items-center gap-2">
          <label>Prenumele:</label>{" "}
          <input
            className="form-control"
            name="lastname"
            onChange={onChangeInput}
            type="text"
            defaultValue={userData.firstname}
            required
            disabled={input.disabled}
          ></input>
        </div>

        <div className="d-flex flex-row mt-2 mb-2 align-items-center gap-2">
          <label>Vîrsta:</label>
          <input
            className="form-control"
            onChange={onChangeInput}
            type="text"
            name="age"
            defaultValue={userData.age}
            required
            disabled={input.disabled}
          ></input>
        </div>

        <div className="d-flex flex-row mt-2 mb-2 align-items-center gap-2">
          {" "}
          <label>Email:</label>{" "}
          <input
            className="form-control"
            onChange={onChangeInput}
            //  onChange={(e)=>setUser({...userData,email:e.target.value})}
            type="email"
            name="email"
            defaultValue={userData.email}
            required
            disabled={input.disabled}
          ></input>
        </div>

        <div className="d-flex flex-row mt-2 mb-2 align-items-center gap-2">
          {" "}
          <label>Username:</label>{" "}
          <input
            className="form-control"
            onChange={onChangeInput}
            type="text"
            name="username"
            defaultValue={userData.username}
            required
            disabled={input.disabled}
          ></input>
        </div>

        <div className="d-flex flex-row mt-2 mb-2 align-items-center gap-2">
          <label>Telefon:</label>{" "}
          <input
            className="form-control"
            onChange={onChangeInput}
            type="tel"
            name="tel"
            defaultValue={userData.mobile}
            required
            disabled={input.disabled}
          ></input>
        </div>

        <div className="d-flex flex-column mt-2 mb-2 align-items-center gap-2">
          <label className="switch">
            <label>Statutul:</label> <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </Modal.Body>

      {input.disabled ? (
        <Button color="secondary" onClick={(e) => setInput(false)}>
          Editează
        </Button>
      ) : (
        <div className="d-flex justify-content-between flex-wrap">
          <Button>Salvează</Button>
          <Button onClick={onClickState}>Anulează</Button>
        </div>
      )}
    </Modal>
  );
};

export default UserDetails;
