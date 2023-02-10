import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

import { Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import fraud from "../images/fraud.jpg";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Signin() {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [msg, setmsg] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    navigate("/Home");
    return;
  };

  const action = (
    <React.Fragment>
      <IconButton size="small" color="inherit" onClick={handleClose}>
        <CloseIcon></CloseIcon>
      </IconButton>
    </React.Fragment>
  );

  const theme = createTheme();

  const formik = useFormik({
    initialValues: {
      email: "",
      cuspass: "",
    },

    onSubmit: (values) => {
      axios.post('http://localhost:8080/api/customer/login',values)            
      .then(obj => {                                              
        sessionStorage.setItem('token', obj.data.token)
         sessionStorage.setItem('walletaccount', obj.data.walletaccount);
         sessionStorage.setItem('UserFname', obj.data.UserFname);
         sessionStorage.setItem('UserLname', obj.data.UserLname);
         sessionStorage.setItem("FullName", `${sessionStorage.getItem("UserFname")} ${sessionStorage.getItem("UserLname")}`);
            setmsg("login successful");
            setOpen(true)
         
      })
      .catch(error => {console.log(error); setErr(error.response.data.message)})
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("invalid Email Id")
        .required("The field cannot be left empty"),
        cuspass: yup.string().required("please enter the password"),
    }),
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}>
          {" "}
          <img
            src={fraud}
            alt="fraud-pics"
            style={{ height: "680px", width: "800px" }}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: " #401664" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {err !== "" ? (
              <span className="text-center alert alert-danger">{err}</span>
            ) : (
              <span></span>
            )}
            <div onSubmit={formik.handleSubmit}>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="email"
                  name="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                />
                {formik.errors.email && formik.touched.email ? (
                  <span className="text-danger">{formik.errors.email}</span>
                ) : null}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="cuspass"
                  name="cuspass"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
                {formik.errors.cuspass && formik.touched.cuspass ? (
                  <span className="text-danger">{formik.errors.cuspass}</span>
                ) : null}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: " #401664" }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <a href="/Register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </a>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={600}
        onClose={handleClose}
        message={msg}
        action={action}
      />
    </ThemeProvider>
  );
}
