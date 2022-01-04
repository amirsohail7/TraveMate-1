import React, { useState, useEffect,useRef} from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
      // Default transform is "translate(14px, 20px) scale(1)""
      // This lines up the label with the initial cursor position in the input
      // after changing its padding-left.
      transform: "translate(34px, 20px) scale(1);",
      color: "white",
      borderColor: "white",
    },
  },
  inputRoot: {
    color: "white",
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      // Default left padding is 6px
      paddingLeft: 26,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple",
    },
  },
}));

const SearchHotels = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const loading = open && data.length === 0;
  const classes = useStyles();

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    axios
      .get("http://localhost:3040/hotel/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setData([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      classes={classes}
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={data}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Hotels"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="primary" size={20} />
                ) : null}
                
                {params.InputProps.endAdornment}
                
              </>
            ),
          }}
        />
      )}
    />
  );
};
export default SearchHotels;
