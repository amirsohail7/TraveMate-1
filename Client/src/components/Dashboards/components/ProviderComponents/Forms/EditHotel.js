import React from "react";
import axios from "axios";
import { useState } from "react";
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
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";

const EditHotel = (_props) => {
  const { id } = useParams();

  console.log(_props);
  let arr = _props.hotel;
  console.log(arr);
  console.log(id);
  const res = arr.find((hotel) => hotel._id === id);
  console.log(res);

  const [name, setName] = useState(res.name);
  const [priceLevel, setPriceLevel] = useState(res.priceLevel);
  const [priceRange, setPriceRange] = useState(res.priceRange);
  const [hotelClass, setHotelClass] = useState(res.hotelClass);
  const [phone, setPhone] = useState(res.phone);
  const [address, setAddress] = useState(res.address);
  const [email, setEmail] = useState(res.email);
  const [amenities, setAmenities] = useState(res.amenities);
  const [latitude, setLatitude] = useState(res.latitude);
  const [longitude, setLongitude] = useState(res.longitude);
  const [website, setWebsite] = useState(res.website);
  const [photos, setPhotos] = useState(res.photos);
  const [title, setTitle] = useState("");
  const [multipleFiles, setMultipleFiles] = useState("");
  const [multipleProgress, setMultipleProgress] = useState(0);

  const history = useHistory();
  const [status, setStatus] = useState(null);
  const [val, setVal] = useState([1000, 15000]);
  console.log(hotelClass);

  //set price range
  const updateVal = (e, item) => {
    setVal(item);
    let range = "PKR " + val[0] + " - PKR " + val[1];
    setPriceRange(range);
    console.log(priceRange);
  };

  //get check box data and push to amenities array

  const getValue = (e) => {
    let data = amenities;
    data.push(e.target.value);
    setAmenities(data);
    console.log(amenities);
  };

  //lng lat

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
    const hotel = {
      name,
      priceLevel,
      priceRange,
      hotelClass,
      phone,
      address,
      email,
      amenities,
      latitude,
      longitude,
      website,
      photos,
    };
    console.log(hotel);
    axios
      .put(`http://localhost:3040/hotel/update/${id}`, hotel)
      .then((response) => {
        if (response.status === 200) {
          alert("Details Updated");
        }

        history.push("/Provider/Services");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className={formCSS.Description}>
        <h2 className={formCSS.form__title}>
          Add a Hotel
          <span>
            <p className={formCSS.muted}>
              Please fill all the fields as Accuratley as you can
            </p>
          </span>
        </h2>
      </div>

      <form className={formCSS.FormGrid} onSubmit={handleSubmit}>
        <div className={formCSS.FieldsLeft}>
          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Hotel title</label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={name}
              placeholder="Marriot"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Address</label>
            <textarea
              className={formCSS.form__input}
              required
              value={address}
              placeholder="Building #, Street #, City#"
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Price Range</label>
            <div style={{ width: 300 }}>
              <p>
                PKR {val[0]} - PKR {val[1]}
              </p>
              <Slider
                value={val}
                min={0}
                max={40000}
                step={500}
                onChange={updateVal}
              />
            </div>
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Hotel Class</label>
            <p>{hotelClass} Star</p>
            <Rating
              name="simple-controlled"
              value={hotelClass}
              onChange={(e) => setHotelClass(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>website</label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              placeholder="www.Marriothotels.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Phone </label>
            <input
              className={formCSS.form__input}
              type="text"
              required
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
              required
              value={email}
              placeholder="Islamabad@marriot.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Name your Gallery </label>
            <input
              className={formCSS.form__input}
              type="text"
              value={title}
              placeholder="Rooms,Menu.."
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
            <label className={formCSS.form__label}>Amenities </label>

            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="High Speed Internet (WiFi)"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="High Speed Internet (WiFi)"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Secure parking"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Secure parking"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Pool"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Pool"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Complimentary breakfast"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Complimentary breakfast"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Transportation"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Transportation"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Gym / Workout Room"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Gym / Workout Room"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Air conditioning"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Air conditioning"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Room service"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Room service"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    value="Local Guide"
                    onChange={(e) => getValue(e)}
                  />
                }
                label="Local Guide"
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
            <label className={formCSS.form__label}>Longitude</label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={longitude}
              placeholder={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>latitude</label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={latitude}
              placeholder={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
          </div>

          <button className={formCSS.btn}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditHotel;
