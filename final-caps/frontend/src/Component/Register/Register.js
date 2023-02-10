import axios from "axios";
import { Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import YupPassword from "yup-password";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

YupPassword(yup);
const theme = createTheme();

export default function Register() {
  const yup = require("yup");
  require("yup-password")(yup);

  const [err, setErr] = useState("");
  const [open, setOpen] = useState(false);
  const [msg, setmsg] = useState("");

  const handleClose = () => {
    setOpen(false);
    navigate("/Signin");
    return;
  };

  const action = (
    <React.Fragment>
      <IconButton size="small" color="inherit" onClick={handleClose}>
        <CloseIcon></CloseIcon>
      </IconButton>
    </React.Fragment>
  );

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      cuspass: "",
      confirmpass: "",
    },

    onSubmit: (values) => {
      
            axios
              .post("http://localhost:8080/api/customers/add", values)
              .then((res) => {
                setOpen(true);
                setmsg(
                  "Registered Successfully, Redirecting you to login page"
                );
              })
              .catch((error) =>{console.log(error); setErr(error.response.data)})
         
    },

    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("Enter the valid Email Id")
        .required("The field cannot be left empty"),

      cuspass: yup
        .string()
        .password()
        .required("please enter the valid password"),

      confirmpass: yup
        .string()
        .oneOf([yup.ref("cuspass"), null], "Passwords must match")
        .required("please confirm the password"),
      fname: yup
        .string()
        .required("Name cannot be left blank")
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          "Name can only contain Latin letters."
        )
        .min(3, "too short"),

      lname: yup.string().required("Name cannot be left blank"),
    }),
  });

  return (
    <div>
      <hr />
      <ThemeProvider theme={theme} className="border">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: " #401664" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            {err !== "" ? (
              <span className="text-center alert alert-danger">{err}</span>
            ) : (
              <span></span>
            )}

            <div onSubmit={formik.handleSubmit}>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="fname"
                      name="fname"
                      required
                      fullWidth
                      label="First Name"
                      autoFocus
                    />
                    {formik.errors.fname && formik.touched.fname ? (
                      <span className="text-danger">{formik.errors.fname}</span>
                    ) : null}
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="lname"
                      name="lname"
                      label="Last Name"
                      autoComplete="family-name"
                    />
                    {formik.errors.lname && formik.touched.lname ? (
                      <span className="text-danger">{formik.errors.lname}</span>
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="email"
                      name="email"
                      label="Email Address"
                      autoComplete="email"
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <span className="text-danger">{formik.errors.email}</span>
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="cuspass"
                      name="cuspass"
                      label="Password"
                      type="password"
                      autoComplete="new-password"
                    />
                    {formik.errors.cuspass && formik.touched.cuspass ? (
                      <span className="text-danger">
                        {formik.errors.cuspass}
                      </span>
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="confirmpass"
                      name="confirmpass"
                      label="Confirm Password"
                      type="password"
                      autoComplete="conf-password"
                    />
                    {formik.errors.confirmpass &&
                    formik.touched.confirmpass ? (
                      <span className="text-danger">
                        {formik.errors.confirmpass}
                      </span>
                    ) : null}
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: " #401664" }}
                >
                  Submit
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <a variant="body2" href="/Signin">
                      Already have an account? Sign in
                    </a>
                  </Grid>
                </Grid>
              </Box>
              </div>
            </Box>
        </Container>
        <Snackbar
          open={open}
          autoHideDuration={600}
          onClose={handleClose}
          message={msg}
          action={action}
        />
      </ThemeProvider>
    </div>
  );
}
