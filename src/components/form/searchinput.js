import React from "react";
// import { useSearch } from "../../context/search";
import { useSearch } from "../context/search";
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, IconButton, InputAdornment } from '@mui/material';

const Searchinput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://jobserver-1.onrender.com/api/route/jobs/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>

        <TextField
      placeholder="Search"
      size="small"
      value={values.keyword}
      onChange={(e) => setValues({ ...values, keyword: e.target.value })}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton type="submit">
              <SearchIcon style={{ color: "#333" }}/>
            </IconButton>
          </InputAdornment>
        ),
        style: { // Inline style for input element
          padding: '2px 10px', // Example padding
          borderRadius: 20, // Example border radius
          backgroundColor: '#fff', // Example background color
          color: '#333', // Example text color
          border: 'none', // Example border
          outline: 'none' // Remove outline border
        },
        disableUnderline: true, 
      }}
      
      
    />
       
      </form>
    </div>
  );
};

export default Searchinput;