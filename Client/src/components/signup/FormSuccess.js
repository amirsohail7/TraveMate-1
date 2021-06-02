import React from "react";
import "./Form.css";
import { useHistory } from "react-router-dom";

const FormSuccess = () => {
  const history = useHistory();
  var userType = sessionStorage.getItem("userType");

  const redirect = () => {
    console.log("clicked");
    if (userType == "Provider") {
      history.push("/ProviderDash");
      console.log("redirect to Provider dash");
    }
    if (userType == "Traveler") {
      console.log("redirect to travler dash");
      history.push("/TravelerDash");
    }
  };

  return (
    <div className="form-content-right">
      <h1 className="form-success">Registration Successfull!</h1>
      <button className="proceed-btn" onClick={redirect}>
        {" "}
        Proceed{" "}
      </button>
    </div>
  );
};

export default FormSuccess;
