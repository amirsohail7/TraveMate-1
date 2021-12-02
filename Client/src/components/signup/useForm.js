import { useState, useEffect, useContext } from "react";
import axios from "axios";
//import { UserContext } from "../../contexts/UserContext";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    userType: "",
  });

  /* const { User } = useContext(UserContext);
  {
    User.setUserType = values.userType;
    console.log(User.userType);
  } */

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
      axios
        .post("http://localhost:3040/provider/create_provider", values)
        .then((res) => {
          console.log("Provider data is posted");
          console.log(res.data);

          localStorage.setItem("userType", "Provider");
          localStorage.setItem("userID", res.data._id);
          localStorage.setItem("isLoggedIn", true);
        });
    }

    if (values.userType === "Traveler") {
      axios
        .post("http://localhost:3040/traveler/create_traveler", values)
        .then((res) => {
          console.log("Traveler data is posted");
          console.log(res.data);

          localStorage.setItem("userType", "Traveler");
          localStorage.setItem("userID", res.data._id);
          localStorage.setItem("isLoggedIn", true);
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

export default useForm;
