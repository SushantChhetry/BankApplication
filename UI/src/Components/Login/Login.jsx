import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid, Box } from "@mui/material/";
import { Typography } from "@mui/material";
import BankLogo from "../../Assets/Bank_logo.png";
import { useNavigate } from "react-router-dom";
import {useFetch} from "../../useFetch";


import "./login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //user object
  const user = {
    first: "",
    last: "",
    username:"test",
    password:"test",
    balace: 500,
    accountNumber: 1,
    email: "test@test.com"
  }

  //URI
  const uri = "https://localhost:8080/";

  //using custom hook
  const {loading, data, error} = useFetch(uri);


  const [check, setCheck] = useState(false);

  // Authentication
  const checkUser = (uname, pword) => {
    //check if the user is in the database
    if (user.username === uname && user.password === pword) {
      alert("Correct password or email");
      setCheck(true);
    } else if (uname === "" || pword === "") {
      alert("Please Enter Password or Email");
    } else {
      alert("Incorrect password or email");
    }
  };

  if (check) {
    navigate("/dashboard");
  }

  if (loading) return <h1>LOADING...</h1>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  
  return (
    <>
      <img
        src={BankLogo}
        alt="bank-logo"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "25%",
        }}
      />
      <div
        className="login"
        style={{
          margin: "10px auto",
          width: "40%",
          border: "3px solid blue",
          padding: "10px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={2}>
              <Typography variant="h2">Sign In</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-basic"
                label="Username"
                type="email"
                variant="outlined"
                helperText="Please enter your username"
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                helperText="Please enter your password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6">
                Remember Me <Checkbox />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                onClick={() => checkUser(userName, password)}
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Login;
