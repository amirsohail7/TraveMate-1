import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import formCSS from "./forms.module.css";
import { multipleFilesUpload } from "../../../../shared/uploads";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useParams } from "react-router-dom";

const EditTour = (_props) => {
  const { id } = useParams();

  console.log(_props);
  let arr = _props.tour;
  console.log(arr);
  console.log(id);
  const res = arr.find((tour) => tour._id === id);
  console.log(res);

  const [Name, setName] = useState(res.Name);
  const [Destination, setDestination] = useState(res.Destination);
  const [Departure, setDeparture] = useState(res.Departure);
  const [DepartureLocation, setDepartureLocation] = useState(
    res.DepartureLocation
  );
  const [Price, setPrice] = useState(res.Price);
  const [tourStatus, setStatus] = useState(res.tourStatus);
  const [Description, setDescription] = useState(res.Description);
  const [photos, setPhotos] = useState(res.photos);
  const [title, setTitle] = useState("");
  const [multipleFiles, setMultipleFiles] = useState("");
  const [multipleProgress, setMultipleProgress] = useState(0);

  const history = useHistory();

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

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const tour = {
      Name,
      Destination,
      Departure,
      DepartureLocation,
      Price,
      tourStatus,
      Description,
      photos,
    };

    axios.put(`http://localhost:3040/tour/update/${id}`, tour).then(() => {
      history.push("/ProviderDash");
      console.log("data is posted");
      console.log(tour);
    });
  };

  return (
    <div>
      <div>
        <h2 className={formCSS.form__title}>
          Edit Tour Details{" "}
          <span>
            <p className={formCSS.muted}>Only fill fields you want to update</p>
          </span>
        </h2>
      </div>

      <form className={formCSS.FormGrid} onSubmit={handleSubmit}>
        <div className={formCSS.FieldsLeft}>
          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Tour Title : </label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Destination : </label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={Destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Departure : </label>
            <input
              className={formCSS.form__input}
              type="Date"
              required
              value={Departure}
              onChange={(e) => setDeparture(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Departure Location: </label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={DepartureLocation}
              onChange={(e) => setDepartureLocation(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Tour Cost : </label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Description : </label>
            <textarea
              className={formCSS.form__input}
              required
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className={formCSS.FieldsRight}>
          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Name your Gallery : </label>
            <textarea
              className={formCSS.form__input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Select Multiple Files</label>
            <input
              type="file"
              onChange={(e) => MultipleFileChange(e)}
              multiple
            />
            <button
              className={formCSS.btn}
              onClick={() => UploadMultipleFiles()}
            >
              Upload
            </button>
            <div style={{ width: 150, height: 150 }}>
              <CircularProgressbar
                value={multipleProgress}
                text={`${multipleProgress}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(255, 136, 136, ${multipleProgress / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Tour Status : </label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={tourStatus}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>

          <button className={formCSS.btn}>Submit</button>
        </div>
      </form>
    </div>
  );
};
export default EditTour;
