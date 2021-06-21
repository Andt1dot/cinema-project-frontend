import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PremiereDescription from "../components/PremiereView/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const AboutPremiere = (props) => {
  const { id } = useParams();

  const [premiere, setPremiere] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/premieres/${id}`).then((premiere) => {
      setPremiere(premiere.data);
    });
  }, [id]);

  return (
    <div className="container">
      <PremiereDescription premiere={premiere} />
    </div>
  );
};

export default AboutPremiere;
