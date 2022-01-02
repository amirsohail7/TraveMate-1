import React,{useState,useEffect} from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Earnings from "./Earnings";
import Info from "./Info";
import JoinSlack from "./JoinSlack";
import ProjectRecommendation from "./ProjectRecommendation";
import Projects from "./Projects";
import Invoices from "./Invoices";
import FetchWeather from "../../../shared/FetchWeather";

function MainContent() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  }, []);


  return (
    <Container>
      <Navbar />
      <SubContainer>
     <Row1>
      <Earnings />
            <Info />

   <Coloumn2>
    {latitude && longitude ?
  <FetchWeather
        lat={latitude}
        lon={longitude}
      /> : <p>{status}</p>
  }
  </Coloumn2>
 
 </Row1>

        
            
          
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 4rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;

const Coloumn2 = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  height: 100%;
  gap: 1rem;
  width: 100%;
  padding-right:15%;
  padding-left:15%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;


const Row1 = styled.div`
  display:flex;
  flex-direction:row;
  height:45%;
  gap:1rem;
  margin-top:3%;
`;


const Row2 = styled.div`
 width:40%;
`;

export default MainContent;
