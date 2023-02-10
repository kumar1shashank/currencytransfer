import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import AddMoney from "./AddMoney";
import Swal from "sweetalert2";

import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function MoneyAdd() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [account, setAccount] = useState(
    sessionStorage.getItem("walletaccount")
  );

  const handleClose = (event, reason) => {
    setOpen(false);
    Swal.fire({
      title: "Success!",
      text: "Money has been added successfully.",
      icon: "success",
    }).then(() => {
      window.location.reload(true);
    });
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const formik = useFormik({
    initialValues: {
      cardNo: "",
      expdate: "",
      cvv: "",
      walletaccount: "",
      amount: "",
    },
    onSubmit: (values) => {
      axios
        .post(
          "  http://localhost:8080/api/money/addmoney",
          { walletaccount: account, amount: values.amount },
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          setOpen(true);

          setMsg(`Adding Money`);
        })
        .catch((error) => {
          console.log(error);
          setErr(error.message);
        });
    },

    validationSchema: yup.object().shape({
      cardNo: yup
        .string()
        .required("The field cannot be left empty")
        .min(16, "Card should be of 16 digits")
        .max(16, "Card should be of 16 digits"),
      expdate: yup
        .string()
        .required("Name cannot be left blank")
        .min(6, "please update date in MMYYYY format")
        .max(6, "please update date in MMYYYY format"),
      cvv: yup
        .string()
        .required("cvv cannot be left blank")
        .min(3, "please check the cvv")
        .max(3, "please check the cvv"),
      amount: yup.string().required("amount cannot be left blank"),
      // walletaccount: yup.string().required("acc No cannot be left blank"),
    }),
  });
  return (
    <div>
      <div className="container text-center mt-2">
        <div className="row">
          <div className="col">
            <AddMoney />
          </div>
          <div className="col border">
            <div onSubmit={formik.handleSubmit}>
              {err !== "" ? (
                <span className="text-center alert-danger">{err}</span>
              ) : (
                <span></span>
              )}
              <div className="mb-3">
                <label className="form-label">Card No</label>
                <input
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="cardNo"
                  name="cardNo"
                  className="form-control"
                  placeholder="1234-4567-8901-2345"
                />
                {formik.errors.cardNo && formik.touched.cardNo ? (
                  <span className="text-danger">{formik.errors.cardNo}</span>
                ) : null}
              </div>
              <div className="mb-3">
                <label className="form-label">Expiry Date</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="expdate"
                  name="expdate"
                  placeholder="MMYYYY"
                />
                {formik.errors.expdate && formik.touched.expdate ? (
                  <span className="text-danger">{formik.errors.expdate}</span>
                ) : null}
              </div>
              <div className="mb-3">
                <label className="form-label">CVV</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="cvv"
                  name="cvv"
                  placeholder="CVV"
                />
                {formik.errors.cvv && formik.touched.cvv ? (
                  <span className="text-danger">{formik.errors.cvv}</span>
                ) : null}
              </div>
              <div className="mb-3">
                <label className="form-label">Account Number</label>
                <input
                  type="number"
                  className="form-control"
                  value={account}
                  onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // id="walletaccount"
                  // name="walletaccount"
                  placeholder="Account Number"
                />
                {/* {formik.errors.walletaccount && formik.touched.walletaccount ? (
                <span className="text-danger">{formik.errors.walletaccount}</span>
              ) : null} */}
              </div>
              <div className="mb-3">
                <label className="form-label">Amount</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="amount"
                  name="amount"
                  placeholder="Amount"
                />
                {formik.errors.amount && formik.touched.amount ? (
                  <span className="text-danger">{formik.errors.amount}</span>
                ) : null}
              </div>
              <button
                className="btn btn-primary col-12 mb-3"
                type="submit"
                onClick={formik.handleSubmit}
              >
                Add Money
              </button>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={msg}
        action={action}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
}
