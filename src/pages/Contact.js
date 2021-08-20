import React from "react";
import EmailForm from "../components/EmailForm";
import MapForm from "../components/MapForm";

const Contact = () => {
  return (
    <div class="row justify-content-center">
      <div class="col-12 col-md-7 col-lg-6 pb-5">
        <MapForm />
        <EmailForm />
      </div>
    </div>
  );
};

export default Contact;
