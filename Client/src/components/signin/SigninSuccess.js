import React, { useState } from "react";
import "./Signin.css";
import { useHistory } from "react-router-dom";

const SigninSuccess = () => {
  const [userType, setuserType] = useState("");

  const history = useHistory();

  const redirect = () => {
    setuserType(localStorage.getItem("userType"));
    console.log("clicked");
    console.log(userType);
    if (userType === "Provider") {
      history.push("/ProviderDash");
      console.log("redirect to Provider dash");
    }
    if (userType === "Traveler") {
      console.log("redirect to travler dash");
      history.push("/Traveler");
    }
  };

  return (
    <div className="form-content-right">
      <h1 className="form-success">Login SuccessFull!!</h1>
      <button className="proceed-btn" onClick={redirect}>
        {" "}
        Proceed{" "}
      </button>
    </div>
  );
};

export default SigninSuccess;
