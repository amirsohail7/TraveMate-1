import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import formCSS from "./forms.module.css";

const UpdateProfile = (_props) => {
  const history = useHistory();
  const [username, setUsername] = useState(_props.provider.username);
  const [company, setCompany] = useState(_props.provider.company);
  const [age, setAge] = useState(_props.provider.age);
  const [dob, setDob] = useState(_props.provider.dob);
  const [email, setEmail] = useState(_props.provider.email);
  const [password, setPassword] = useState(_props.provider.password);
  const [phone, setPhone] = useState("");

  const provider = {
    username,
    company,
    age,
    dob,
    email,
    password,
    phone,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `http://localhost:3040/provider/update/${_props.provider._id}`,
        provider
      )
      .then(() => {
        console.log("data is posted");
        console.log(provider);
        history.push("/Provider/Dashboard");
      });
  };

  return (
    <div className={formCSS.bg}>
      <h2 className={formCSS.form__title}>Update Profile</h2>
      <form className={formCSS.FormGrid} onSubmit={handleSubmit}>
        <div className={formCSS.FieldsLeft}>
          <p>Account Information</p>
          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Username </label>
            <input
              className={formCSS.form__input}
              type="text"
              value={username}
              placeholder={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Email </label>
            <input
              className={formCSS.form__input}
              type="text"
              value={email}
              placeholder={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Password </label>
            <input
              className={formCSS.form__input}
              type="text"
              value={password}
              placeholder={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Company Name </label>
            <input
              className={formCSS.form__input}
              type="text"
              value={company}
              placeholder={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
        </div>
        <div className={formCSS.FieldsRight}>
          <p>Personal Information</p>
          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Age </label>
            <input
              className={formCSS.form__input}
              type="number"
              value={age}
              placeholder={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Date Of birth </label>
            <input
              className={formCSS.form__input}
              type="Date"
              value={dob}
              placeholder={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Phone </label>
            <input
              className={formCSS.form__input}
              type="Number"
              value={phone}
              placeholder={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button className={formCSS.btn}>Save</button>
        </div>
      </form>
    </div>
  );
};
export default UpdateProfile;
