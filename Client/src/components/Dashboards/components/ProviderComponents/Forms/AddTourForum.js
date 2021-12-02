import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import formCSS from "./forms.module.css";
import { multipleFilesUpload } from "../../../../shared/uploads";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AddTourForum = () => {
  const [Name, setName] = useState(" ");
  const [Destination, setDestination] = useState(" ");
  const [Departure, setDeparture] = useState(" ");
  const [DepartureLocation, setDepartureLocation] = useState(" ");
  const [Price, setPrice] = useState(" ");
  const [provider, setProvider] = useState(localStorage.getItem("userID"));
  const [tourStatus, setStatus] = useState(" ");
  const [Description, setDescription] = useState(" ");
  const [photos, setPhotos] = useState("");
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
      provider,
      tourStatus,
      Description,
      photos,
    };

    axios.post("http://localhost:3040/tour/create_tour", tour).then(() => {
      history.push("/ProviderDash");
      console.log("data is posted");
      console.log(tour);
    });
  };

  return (
    <div className={formCSS.tourbg}>
      <div className={formCSS.container}>
        <h2 className={formCSS.form__title}>Add Tour Form</h2>

        <form className={formCSS.form} onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>
  );
};
export default AddTourForum;
