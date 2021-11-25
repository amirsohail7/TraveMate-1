import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import formCSS from "./profileform.module.css";

const UpdateProfile = () => {
  let ID = sessionStorage.getItem("userID");
  const [user, setUser] = useState("");
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:3040/traveler/${ID}`);
      console.log("User data recieved");
      console.log(res.data);
      setUser(res.data);
      console.log(user);
    };
    fetchUser();
  }, []);

  const [username, setUsername] = useState("");
  const [company, setCompany] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const traveler = {
    username,
    age,
    dob,
    email,
    password,
    phone,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put("http://localhost:3040/traveler/update", traveler).then(() => {
      console.log("data is posted");
      console.log(traveler);
      history.push("/TravelerDash");
    });
  };

  return (
    <div className={formCSS.bg}>
      <h2 className={formCSS.form__title}>Update Profile</h2>
      <form className={formCSS.form} onSubmit={handleSubmit}>
        <left>
          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Username </label>
            <input
              className={formCSS.form__input}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Email </label>
            <input
              className={formCSS.form__input}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Password </label>
            <input
              className={formCSS.form__input}
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </left>
        <right>
          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Age </label>
            <input
              className={formCSS.form__input}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Date Of birth </label>
            <input
              className={formCSS.form__input}
              type="Date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Phone </label>
            <input
              className={formCSS.form__input}
              type="Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button className={formCSS.btn}>Save</button>
        </right>
      </form>
    </div>
  );
};
export default UpdateProfile;
