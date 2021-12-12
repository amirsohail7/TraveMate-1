import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';

const Reservations = (_props) => {
    const serviceType="Restaurant";
    const[seats,setSeats]=useState(1);
    const service = _props.restaurant._id;
    const traveler = localStorage.getItem("userID");
    const provider = _props.restaurant.provider;
    const[time,setTime]=useState();
    const[alert,setAlert]=useState(false);
    console.log(_props);
    
    const Submit = () =>{
        const booking= {
            serviceType,
            seats,
            service,
            traveler,
            provider,
            time
        };
        axios.post("http://localhost:3040/booking/create_booking",booking)
        .then((response)=>{
            if(response.status===200){
                    setAlert(true);
            };
            

        })
        .catch((error) => {
            console.log(error);
          });
    };

    return ( 
        <Container>
            <SubContainer>
            <TitleText>Time</TitleText>
           <In
              type="String"
              required
              value={time}
              placeholder="9:00 PM"
              onChange={(e) => setTime(e.target.value)}
            />
            </SubContainer>
            <SubContainer>
            <TitleText>Person(s)</TitleText>
            <In
              type="number"
              required
              value={seats}
              placeholder="4"
              onChange={(e) => setSeats(e.target.value)}
            />
            </SubContainer>
            
    <Button onClick={() => Submit()}>submit</Button>
    {alert && <Alert severity="success">Reservation Successful! - for more info see dashboard/bookings</Alert>}

        </Container>
     );
}
 const Container =styled.div`
     height:max-content;
     width:80%;
     display:flex;
     flex-direction:column;
     color:gray;
     background:#19191a94;
     border: 2px solid black;
     transition: all 0.2s ease;
     
 `;
  const SubContainer =styled.div`
  width:max-content;
  display:flex;
  flex-direction:row;
  background:#19191a94;
  padding: 10px;
  column-gap:5px;
  
`;
 const TitleText = styled.h4`
 color:white;
 `;
 const In = styled.input`
    -webkit-appearance: none;
  
    width: 100%;
    max-width: 100px;
  
    padding: 0.8em;
    font-size: 0.85em;
  
    outline: none;
    border: 0.5px solid #4332dbe1;
    border-radius: 4px;
    background: #fdfdfdcb;
    transition: background 0.25s, border-color 0.25s, color 0.25s;
    `;
export default Reservations;