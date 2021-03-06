import axios from "axios";

const apiUrl = "http://localhost:3040/api/";

export const singleFileUpload = async (data, options) => {
  try {
    const response = await axios.post(apiUrl + "singleFile", data, options);
    let Id = response.data;
    console.log(Id);
    return Id._id;
  } catch (error) {
    throw error;
  }
};
export const getSingleFiles = async (id) => {
  try {
    const { data } = await axios.get(apiUrl + `${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const multipleFilesUpload = async (data, options) => {
  try {
    const response = await axios.post(apiUrl + "multipleFiles", data, options);
    let Id = response.data;
    console.log(Id._id);
    return Id._id;
  } catch (error) {
    throw error;
  }
};
export const getMultipleFiles = async (id) => {
  try {
    const { data } = await axios.get(apiUrl + `set/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
