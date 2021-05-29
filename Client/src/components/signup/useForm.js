import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    userType: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

    console.log('handle submit function triggered!!!!!!'); // just to check if function triggering
    console.log(values) // just to check data recieved from sigup form

    if(values.userType==="Provider"){

      axios.post('http://localhost:3040/provider/create_provider',values)
        .then(() => {
           // history.push('/')
           console.log('data is posted');
        })

    }

    if(values.userType==="Traveler"){

      axios.post('http://localhost:3040/traveler/create_traveler',values)
        .then(() => {
           // history.push('/')
           console.log('data is posted');
        })

    }

        
    
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;