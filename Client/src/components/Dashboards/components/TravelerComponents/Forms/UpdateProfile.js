import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import formCSS from "./forms.module.css";
import { singleFileUpload } from "../../../../shared/uploads";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const UpdateProfile = (_props) => {
  const history = useHistory();
  const [username, setUsername] = useState(_props.traveler.username);
  const [age, setAge] = useState(_props.traveler.age);
  const [dob, setDob] = useState(_props.traveler.dob);
  const [email, setEmail] = useState(_props.traveler.email);
  const [password, setPassword] = useState(_props.traveler.password);
  const [phone, setPhone] = useState(_props.traveler.phone);
  const [photo, setPhoto] = useState(_props.traveler.photo);
  //
  const [singleFile, setSingleFile] = useState("");
  const [singleProgress, setSingleProgress] = useState(0);

  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
    setSingleProgress(0);
  };

  const singleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setSingleProgress(percentage);
    },
  };

  const uploadSingleFile = async () => {
    const formData = new FormData();
    formData.append("file", singleFile);
    const ID = await singleFileUpload(formData, singleFileOptions);
    setPhoto(ID);
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    const traveler = {
      username,
      age,
      dob,
      email,
      password,
      phone,
      photo,
    };

    axios
      .put(
        `http://localhost:3040/traveler/update/${_props.traveler._id}`,
        traveler
      )
      .then((response) => {
        console.log("data is posted");
        console.log(traveler);
        if (response.status === 200) {
          alert("details updated");
          history.push("/traveler/Dashboard");
        }
      });
  };

  return (
    <div className={formCSS.bg}>
      <h2 className={formCSS.form__title}>Update Profile</h2>

      <div className={formCSS.form__item}>
        <label>Profile Picture</label>
        <input type="file" onChange={(e) => SingleFileChange(e)} />
      </div>
      <div className={formCSS.sidebyside}>
        <button
          type="button"
          className={formCSS.btn}
          onClick={() => uploadSingleFile()}
        >
          Upload
        </button>

        <div className={formCSS.imageUpload}>
          <CircularProgressbar
            value={singleProgress}
            text={`${singleProgress}%`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "16px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255, 136, 136, ${singleProgress / 100})`,
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
      </div>

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
