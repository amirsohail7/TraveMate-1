import React, { useState, useEffect } from "react";
import Payments from "./Payments";
import styles from "./PayByCard.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Alert from "@mui/material/Alert";

const PayByCard = () => {
  const { type, id } = useParams();
  const [service, setService] = useState();
  console.log(id);

  const [seats, setSeats] = useState(1);
  const [to, setTo] = useState();
  const [from, setFrom] = useState();
  const [discount, setDiscount] = useState();
  let price = 5000;
  const [paymentStatus, setPaymentStatus] = useState("");
  const [description, setDescription] = useState();
  const traveler = localStorage.getItem("userID");
  const [provider, setProvider] = useState("61ab4a6cb20041437484dc56");
  const serviceType = type;
  const [alert, setAlert] = useState(false);
  const roomType = useRadioGroup();

  useEffect(() => {
    axios
      .get(`http://localhost:3040/${type}/${id}`)
      .then((response) => {
        setService(response.data);
        if (response.data.provider) {
          setProvider(response.data.provider);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const SubmitHotel = () => {
    setPrice();
    //let Difference_In_Time = to.getTime() - from.getTime();
    //let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    let amount = seats * price; // * Difference_In_Days
    const booking = {
      serviceType,
      seats,
      from,
      to,
      description,
      service,
      traveler,
      provider,
      amount,
    };
    axios
      .post("http://localhost:3040/booking/create_booking", booking)
      .then((response) => {
        if (response.status === 200) {
          setAlert(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SubmitTour = () => {
    let amount = service.Price * seats;
    const booking = {
      serviceType,
      seats,
      service,
      traveler,
      provider,
      amount,
    };
    axios
      .post("http://localhost:3040/booking/create_booking", booking)
      .then((response) => {
        if (response.status === 200) {
          setAlert(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setPrice = () => {
    if (roomType === "standard") {
      price = 5000;
    }
    if (roomType === "standard double") {
      price = 7000;
    }
    if (roomType === "delux") {
      price = 12000;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.Header}>
        <h1>Booking</h1>
      </div>
      <div className={styles.Items}>
        <h2 className={styles.Label}>Items</h2>
        {service && (
          <div>
            <h3>Marriot</h3>
            <p>{service.name}</p>
            <p>PKR 40000</p>
            <p>
              Seats{" "}
              <span>
                <input
                  type="Number"
                  value={seats}
                  placeholder="1"
                  onChange={(e) => setSeats(e.target.value)}
                />
              </span>
            </p>
            <p />
          </div>
        )}
        {service && type === "Hotel" && (
          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">Room type </FormLabel>
              <RadioGroup
                aria-label="Room type"
                defaultValue="standard"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="standard"
                  control={<Radio />}
                  label="Standard - 2 single beds - 5000/Night"
                />
                <FormControlLabel
                  value="standard double"
                  control={<Radio />}
                  label="Standard double - 2 double beds - 7000/Night"
                />
                <FormControlLabel
                  value="delux"
                  control={<Radio />}
                  label="Delux  - 2 double beds - 12000/Night"
                />
              </RadioGroup>
            </FormControl>
            <p>From</p>
            <input
              type="date"
              required
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <p>to</p>
            <input
              type="date"
              required
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
        )}
      </div>
      <div className={styles.Pay}>
        <div className={styles.footer}>
          <p>Discount coupon</p>
          <input
            type="text"
            value={discount}
            placeholder="code"
            onChange={(e) => setDiscount(e.target.value)}
          />
          <h3>Total PKR</h3>
          {serviceType === "Hotel" && (
            <button
              className={styles.confirm_booking}
              onClick={() => SubmitHotel()}
            >
              {" "}
              Confirm Booking
            </button>
          )}
          {serviceType === "Tour" && (
            <button
              className={styles.confirm_booking}
              onClick={() => SubmitTour()}
            >
              {" "}
              Confirm Booking
            </button>
          )}
          {alert && (
            <Alert severity="success">
              Reservation Successful! - for more info see dashboard/bookings
            </Alert>
          )}
        </div>
        <Payments />
      </div>
    </div>
  );
};

export default PayByCard;
