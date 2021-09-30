import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import formCSS from "./forms.module.css";

const AddHotelForum = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [menu, setMenu] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [daysOpen, setdaysOpen] = useState("");
  const [provider, setProvider] = useState(sessionStorage.getItem("userID"));

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const hotel = {
      name,
      city,
      address,
      phone,
      email,
      description,
      rating,
      category,
      priceRange,
      menu,
      openingTime,
      closingTime,
      daysOpen,
      provider,
    };

    axios.post("http://localhost:3040/hotel/create_hotel", hotel).then(() => {
      // history.push('/')
      console.log("data is posted");
    });
  };
  return (
    <div className={formCSS.hotelbg}>
      <div className={formCSS.container}>
        <h2 className={formCSS.form__title}>Add Hotel</h2>

        <form className={formCSS.form} onSubmit={handleSubmit}>
          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Hotel title:</label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>description:</label>
            <textarea
              className={formCSS.form__input}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>City:</label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Rating:</label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Category:</label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Price Range:</label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Menu:</label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={menu}
              onChange={(e) => setMenu(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Address:</label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Phone :</label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Email :</label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Opening Time:</label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={openingTime}
              onChange={(e) => setOpeningTime(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>closing Time:</label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={closingTime}
              onChange={(e) => setClosingTime(e.target.value)}
            />
          </div>

          <div className={formCSS.form__item}>
            <label className={formCSS.form__label}>Days Open:</label>
            <input
              className={formCSS.form__input}
              type="text"
              required
              value={daysOpen}
              onChange={(e) => setdaysOpen(e.target.value)}
            />
          </div>

          <button className={formCSS.btn}> Add Hotel</button>
        </form>
      </div>
    </div>
  );
};

export default AddHotelForum;
