import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import formCSS from "./forms.module.css";
import { multipleFilesUpload } from "../../../../shared/uploads";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Slider,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import { useParams } from "react-router-dom";

const EditRestaurant = (_props) => {
  const { id } = useParams();

  console.log(_props);
  let arr = _props.restaurant;
  console.log(arr);
  console.log(id);
  const res = arr.find((restaurant) => restaurant._id === id);
  console.log(res);

  const [name, setName] = useState(res.name);
  const [priceLevel, setPriceLevel] = useState(res.priceLevel);
  const [phone, setPhone] = useState(res.phone);
  const [address, setAddress] = useState(res.address);
  const [email, setEmail] = useState(res.email);
  const [cuisine, setCuisine] = useState(res.cuisine);
  const [latitude, setLatitude] = useState(res.latitude);
  const [longitude, setLongitude] = useState(res.longitude);
  const [website, setWebsite] = useState(res.website);
  const [photos, setPhotos] = useState(res.photos);
  const [title, setTitle] = useState("");
  const [multipleFiles, setMultipleFiles] = useState("");
  const [multipleProgress, setMultipleProgress] = useState(0);
  const history = useHistory();
  const [status, setStatus] = useState(null);

  //get check box data and push to cuisine array

  const getValue = (e) => {
    let data = cuisine;
    data.push(e.target.value);
    setCuisine(data);
    console.log(cuisine);
  };

  // lng lat

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  // upload photos

  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
    setMultipleProgress(0);
  };

  const mulitpleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setMultipleProgress(percentage);
    },
  };

  const UploadMultipleFiles = async () => {
    const formData = new FormData();
    formData.append("title", title);
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("files", multipleFiles[i]);
    }
    const ID = await multipleFilesUpload(formData, mulitpleFileOptions);
    setPhotos(ID);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const restaurant = {
      name,
      priceLevel,
      phone,
      address,
      cuisine,
      email,
      latitude,
      longitude,
      website,
      //photos,
    };

    axios
      .put(`http://localhost:3040/restaurant/update/${id}`, restaurant)
      .then(() => {
        alert("Details Updated");
        history.push("/Provider/Services");
      });
  };
  return (
    <div>
      <div className={formCSS.Description}>
        <h2 className={formCSS.form__title}>
          Edit Restaurant Details
          <span>
            <p className={formCSS.muted}>Only fill fields you want to update</p>
          </span>
        </h2>
      </div>

      <form className={formCSS.FormGrid} onSubmit={handleSubmit}>
        <div className={formCSS.FieldsLeft}>
          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Restaurant title</label>
            <input
              className={formCSS.form__input}
              type="text"
              value={name}
              placeholder="Marriot"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Address</label>
            <textarea
              className={formCSS.form__input}
              value={address}
              placeholder="Building #, Street #, City#"
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Phone </label>
            <input
              className={formCSS.form__input}
              type="text"
              placeholder="+92 3123123123"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Email </label>
            <input
              className={formCSS.form__input}
              type="text"
              value={email}
              placeholder="Islamabad@marriot.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>website</label>
            <input
              className={formCSS.form__input}
              type="text"
              placeholder="www.Marriot.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Name your Gallery </label>
            <input
              className={formCSS.form__input}
              type="text"
              value={title}
              placeholder="Decor,Menu.."
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Add images</label>
            <input
              type="file"
              onChange={(e) => MultipleFileChange(e)}
              multiple
            />

            <div className={formCSS.sidebyside}>
              <button
                className={formCSS.btn}
                onClick={() => UploadMultipleFiles()}
              >
                Upload
              </button>
              <div className={formCSS.imageUpload}>
                <CircularProgressbar
                  value={multipleProgress}
                  text={`${multipleProgress}%`}
                  styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: "butt",
                    textSize: "16px",
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(255, 136, 136, ${multipleProgress / 100})`,
                    textColor: "#000000",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7",
                  })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={formCSS.FieldsRight}>
          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Cuisines </label>

            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Pakistani"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Pakistani"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Chinese"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Chinese"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Barbecue"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Barbecue"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Vegetarian"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Vegetarian"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Italian"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Italian"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Cafe"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Cafe"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Middle Eastern"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Middle Eastern"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Fast Food"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Fast Food"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="European"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="European"
              />
            </FormGroup>
          </div>

          <div className={formCSS.sidebyside}>
            <p className={formCSS.muted}>
              Enter latitude and longitude manually, or press 'get location'
            </p>
            <button className={formCSS.btn} onClick={() => getLocation()}>
              Get location
            </button>
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>latitude</label>
            <input
              className={formCSS.form__input}
              type="text"
              value={latitude}
              placeholder={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>longitude</label>
            <input
              className={formCSS.form__input}
              type="text"
              value={longitude}
              placeholder={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>

          <button className={formCSS.btn}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditRestaurant;
