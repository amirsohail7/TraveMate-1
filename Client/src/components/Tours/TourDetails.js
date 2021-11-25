import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getMultipleFiles } from "../shared/uploads";

const TourDetails = () => {
  const { id } = useParams();
  const [tourDetail, setTourDetail] = useState(null);
  const [error, setError] = React.useState(null);
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
        setPhotosID(response.data[0].photos._id);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id]);

  if (error) return `Error: ${error.message}`;
  if (!tourDetail) return null;
  getMultipleFilesList(photosID);

  return (
    <div>
      <div>
        {tourDetail.map((tour) => (
          <div>
            <h2>{tour.Name}</h2>
            <p>Destination {tour.Destination}</p>
            <p>Departure from : {tour.DepartureLocation}</p>
            <p>{tour.Departure}</p>
            <p>{tour.Description}</p>
            <p>PKR {tour.Price}</p>
            <p>{tour.tourStatus}</p>
            <p>Provider : {tour.provider.username}</p>
          </div>
        ))}
      </div>

      <div className="col-6">
        <h4 className="text-success font-weight-bold">Photos</h4>
        {multipleFiles.map((element, index) => (
          <div key={element._id}>
            <h6 className="text-danger font-weight-bold">{element.title}</h6>
            <div className="row">
              {element.files.map((file, index) => (
                <div className="col-6">
                  <div className="card mb-2 border-0 p-0">
                    <img
                      src={`http://localhost:3040/${file.filePath}`}
                      height="200"
                      className="card-img-top img-responsive"
                      alt="img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TourDetails;
