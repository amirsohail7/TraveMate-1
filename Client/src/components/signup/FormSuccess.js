import React from 'react';
import './Form.css';
import { useHistory } from "react-router-dom";
import useState from 'react';

// const [value, setValue] = useState('Provider');
// const history = useHistory();

// const redirect= () => {

//     if(value==="Provider")
//       history.push('/Provider');
//     else
//       history.push('/Traveler');
// };

const FormSuccess = () => {
  
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Registration Successfull!</h1>
     
      
      
    </div>
  );
};

export default FormSuccess;