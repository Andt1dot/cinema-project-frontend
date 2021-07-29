import React from "react";
import { Modal } from "react-bootstrap";
import "./index.css";
const PaymentModal = ({
  onSucces,
  onShow,
  onHide,
  totalPrice,
  handleClickPayMethodCard,
}) => {
  console.log("totalPrice", totalPrice);
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={onShow}
      onHide={onHide}
    >
      <Modal.Header closeButton></Modal.Header>
      <div class="row justify-content-center">
        <div class=" col-lg-6 col-md-8">
          <div class="card p-3">
            <div class="row justify-content-center">
              <div class="col-12">
                <h2 class="heading text-center">Achitare cu Cardul</h2>
              </div>
            </div>
            <form class="form-card">
              <div class="row justify-content-center mb-4 radio-group">
                <div class="col-sm-3 col-5">
                  <div class="radio selected mx-auto" data-value="dk">
                    {" "}
                    <img
                      class="fit-image"
                      src="https://i.imgur.com/5TqiRQV.jpg"
                      width="105px"
                      height="55px"
                    />{" "}
                  </div>
                </div>
                <div class="col-sm-3 col-5">
                  <div class="radio mx-auto" data-value="visa">
                    <img
                      class="fit-image"
                      src="https://i.imgur.com/OdxcctP.jpg"
                      width="105px"
                      height="55px"
                    />{" "}
                  </div>
                </div>
                <div class="col-sm-3 col-5">
                  <div class="radio mx-auto" data-value="master">
                    <img
                      class="fit-image"
                      src="https://i.imgur.com/WIAP9Ku.jpg"
                      width="105px"
                      height="55px"
                    />{" "}
                  </div>
                </div>
                <div class="col-sm-3 col-5">
                  <div class="radio mx-auto" data-value="paypal">
                    <img
                      class="fit-image"
                      src="https://i.imgur.com/cMk1MtK.jpg"
                      width="105px"
                      height="55px"
                    />{" "}
                  </div>
                </div>
              </div>

              <div class="row justify-content-center">
                <div class="col-12">
                  <div class="input-group">
                    <input
                      type="text"
                      name="Name"
                      placeholder="Vasile Ciocan"
                    />{" "}
                    <label>Numele</label>{" "}
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-12">
                  <div class="input-group">
                    {" "}
                    <input
                      type="text"
                      id="cr_no"
                      name="card-no"
                      placeholder="0000 0000 0000 0000"
                      minlength="19"
                      maxlength="19"
                    />{" "}
                    <label>Numărul Cardului</label>{" "}
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-12">
                  <div class="row">
                    <div class="col-6">
                      <div class="input-group">
                        {" "}
                        <input
                          type="text"
                          id="exp"
                          name="expdate"
                          placeholder="MM/YY"
                          minlength="5"
                          maxlength="5"
                        />{" "}
                        <label>Data Expirării</label>{" "}
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-group">
                        {" "}
                        <input
                          type="password"
                          name="cvv"
                          placeholder="&#9679;&#9679;&#9679;"
                          minlength="3"
                          maxlength="3"
                        />{" "}
                        <label>CVV</label>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-12">
                  <input
                    onClick={handleClickPayMethodCard}
                    type="submit"
                    value={`Achită ${totalPrice} LEI`}
                    class="btn btn-pay placeicon"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentModal;
