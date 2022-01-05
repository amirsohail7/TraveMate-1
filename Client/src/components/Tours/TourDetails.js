import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getMultipleFiles } from "../shared/uploads";
import { useHistory } from "react-router-dom";
import css from "./TourDetails.module.css";

const TourDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const [tourDetail, setTourDetail] = useState(null);
  const [error, setError] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [photosID, setPhotosID] = useState("");

  const getMultipleFilesList = async (PID) => {
    try {
      const fileslist = await getMultipleFiles(PID);
      setMultipleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3040/tour/${id}`)
      .then((response) => {
        setTourDetail(response.data);
        console.log(response.data);
        setPhotosID(response.data.photos._id);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id]);

  if (error) return `Error: ${error.message}`;
  if (!tourDetail) return null;
  getMultipleFilesList(photosID);

  const Submit = () => {
    history.push(`/book/Tour/${id}`);
  };

  return (
    <div>
      <div className={css.info}>
        <div className={css.sidebyside}>
          <h2>{tourDetail.name}</h2>
          <button className={css.btn} onClick={() => Submit()}>
            Book Tour
          </button>
        </div>
        <p>Destination {tourDetail.Destination}</p>
        <p>Departure from : {tourDetail.DepartureLocation}</p>
        <p>{tourDetail.Departure}</p>
        <p>{tourDetail.Description}</p>
        <p>PKR {tourDetail.Price}</p>
        <p>{tourDetail.tourStatus}</p>
        <p>Provider : {tourDetail.provider.username}</p>
      </div>

      <div>
        {multipleFiles.map((element, index) => (
          <div key={element._id}>
            <div className={css.row}>
              {element.files.map((file, index) => (
                <img
                  src={`http://localhost:3040/${file.filePath}`}
                  height="200"
                  className="card-img-top img-responsive"
                  alt="img"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TourDetails;
