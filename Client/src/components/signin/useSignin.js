import { useState, useEffect } from "react";
import axios from "axios";

const useSignin = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    userType: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

    console.log("handle submit function triggered!!!!!!"); // just to check if function triggering
    console.log(values); // just to check data recieved from sigup form

    if (values.userType === "Provider") {
      axios.get("http://localhost:3040/provider/").then((res) => {
        console.log("providers fetched");
        console.log("response", res.data);
        let users = res.data;
        let provider = users.find(
          (users) =>
            users.email === values.email && users.password === values.password
        );
        console.log("provider", provider);

        localStorage.setItem("userType", "Provider");
        localStorage.setItem("userID", provider._id);
        localStorage.setItem("Name", provider.username);
        localStorage.setItem("isLoggedIn", true);
        if (provider.photo) {
          localStorage.setItem("DP", provider.photo.filePath);
        }
      });
    }

    if (values.userType === "Traveler") {
      axios.get("http://localhost:3040/traveler/", values).then((res) => {
        console.log("Traveler fetched");
        console.log(res.data);

        let users = res.data;
        let travelers = users.find(
          (users) =>
            users.email === values.email && users.password === values.password
        );
        console.log("travelers", travelers);

        localStorage.setItem("userType", "Traveler");
        localStorage.setItem("userID", travelers._id);
        localStorage.setItem("Name", travelers.username);
        localStorage.setItem("isLoggedIn", true);
        if (travelers.photo) {
          localStorage.setItem("DP", travelers.photo.filePath);
        }
      });
    }

    //ADMIN

    if (values.userType === "Admin") {
      axios.get("http://localhost:3040/admin/", values).then((res) => {
        console.log("Admin fetched");
        console.log(res.data);

        let users = res.data;
        let admins = users.find(
          (users) =>
            users.email === values.email && users.password === values.password
        );
        console.log("admins", admins);

        localStorage.setItem("userType", "Admin");
        localStorage.setItem("userID", admins._id);
        localStorage.setItem("Name", admins.username);
        localStorage.setItem("isLoggedIn", true);
        if (admins.photo) {
          localStorage.setItem("DP", admins.photo.filePath);
        }
      });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useSignin;
