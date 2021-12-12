import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMultipleFiles } from "./uploads";

const DisplayImagesList = ({ photos }) => {
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [photosID, setPhotosID] = useState(photos);

  const getMultipleFilesList = async (PID) => {
    try {
      const fileslist = await getMultipleFiles(PID);
      setMultipleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  };

  if (!photos) {
    return (
      <div>
        <h3> No photos Available </h3>
      </div>
    );
  }
  if (photos.length != 0) {
    getMultipleFilesList(photosID);

    return (
      <div>
        <Box sx={{ width: 500, height: 250, overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {multipleFiles.map((element, index) => (
              <div key={element.id}>
                {element.files.map((file, index) => (
                  <ImageListItem>
                    <img
                      src={`http://localhost:3040/${file.filePath}?w=248&fit=crop&auto=format`}
                      srcSet={`http://localhost:3040/${file.filePath}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt="Images"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </div>
            ))}
          </ImageList>
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <h3> No Photos Provided </h3>
      </div>
    );
  }
};
export default DisplayImagesList;
