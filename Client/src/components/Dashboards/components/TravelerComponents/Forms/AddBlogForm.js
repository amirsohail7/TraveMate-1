import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import formCSS from "./forms.module.css";
import { singleFileUpload } from "../../../../shared/uploads";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AddBlogForum = () => {
  const [Title, setTitle] = useState(" ");
  const author = localStorage.getItem("userID");
  const [Description, setDescription] = useState(" ");
  const [photo, setPhoto] = useState();
  const [singleFile, setSingleFile] = useState("");
  const [singleProgress, setSingleProgress] = useState(0);

  const history = useHistory();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {
      Title,
      author,
      Description,
      photo,
    };

    axios.post("http://localhost:3040/blog/create_blog", blog).then(() => {
      alert("data is posted");
      console.log(blog);
      history.push("/TravelerDash");
    });
  };

  return (
    <div className={formCSS.container}>
      <div className={formCSS.Header_Blog}></div>

      <div className={formCSS.Description}>
        <h2 className={formCSS.form__title}>Write a Blog</h2>
        <p className={formCSS.muted}>
          Share your thoughts and experiences with thousands just like you
        </p>
      </div>

      <form className={formCSS.FormGrid} onSubmit={handleSubmit}>
        <div className={formCSS.FieldsLeft}>
          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Blog Title : </label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
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
          <button className={formCSS.btn}>Submit</button>
        </div>
        <div className={formCSS.FieldsRight}>
          <div className={formCSS.form__item}>
            <label>Add Image</label>
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
        </div>
      </form>
    </div>
  );
};
export default AddBlogForum;
