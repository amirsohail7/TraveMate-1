import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import formCSS from "./forms.module.css";

const AddBlogForum = () => {
  const [Name, setName] = useState(" ");
  const [Destination, setDestination] = useState(" ");
  const [Departure, setDeparture] = useState(" ");
  const [DepartureLocation, setDepartureLocation] = useState(" ");
  const [Price, setPrice] = useState(" ");
  const [provider, setProvider] = useState(sessionStorage.getItem("userID"));
  const [blogStatus, setStatus] = useState(" ");
  const [Description, setDescription] = useState(" ");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {
      Name,
      Destination,
      Departure,
      DepartureLocation,
      Price,
      provider,
      blogStatus,
      Description,
    };

    axios.post("http://localhost:3040/blog/create_blog", blog).then(() => {
      history.push("/ProviderDash");
      console.log("data is posted");
      console.log(blog);
    });
  };

  return (
    <div className={formCSS.blogbg}>
      <div className={formCSS.container}>
        <h2 className={formCSS.form__title}>Add Blog Form</h2>

        <form className={formCSS.form} onSubmit={handleSubmit}>
          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Blog Title : </label>
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
            <label className={formCSS.form__label}>Blog Cost : </label>
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
            <label className={formCSS.form__label}>Blog Status : </label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={blogStatus}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>

          <button className={formCSS.btn}>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default AddBlogForum;
