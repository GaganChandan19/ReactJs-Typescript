import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../styles/Homepage.module.css";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const [country, setcountry] = useState("");
  const nav = useNavigate();

  var handleSubmit = (e:any) => {
    e.preventDefault();
    nav(`/country/${country}`);
  };

  return (
    <>
      <Box className={styles.main}>
        <Box className={styles.box}>
          <Typography variant="h5" component="h4" fontWeight="600">
            Country
          </Typography>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <TextField
              data-testid="inputFeild"
              id="outlined-basic"
              label="Country"
              placeholder="Enter country"
              variant="outlined"
              onChange={(e) => setcountry(e.target.value)}
            />
            <br />
            <Button data-testid="submitButton" disabled={country === ""} type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </>
  )
}

export default Homepage