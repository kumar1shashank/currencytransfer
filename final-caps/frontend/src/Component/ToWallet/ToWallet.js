import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ToWallet() {
  const currencyOptions = [
    { value: "USD", label: "USD - US Dollar" },
    { value: "INR", label: "INR - Indian Rupees" },
    { value: "EUR", label: "EUR - Euro" },
    { value: "GBP", label: "GBP - British Pound" },
    { value: "JPY", label: "JPY - Japanese Yen" },
    { value: "CAD", label: "CAD - Canadian Dollar" },
    { value: "AFN", label: "AFN - Afghanistan Afghani" },
    { value: "AMD", label: "AMD - Armenian Dram" },
    { value: "AWG", label: "AWG - Aruban Florin" },
    { value: "AZN", label: "AZN - Azerbaijan New Manat" },
    { value: "BHD", label: "BHD - Bahraini Dinar" },
    { value: "BWP", label: "BWP - Botswana Pula" },
    { value: "BYR", label: "BYR - Belarusian Ruble" },
    { value: "CDF", label: "CDF - Congolese Franc" },
    { value: "DZD", label: "DZD - Algerian Dinar" },
    { value: "EGP", label: "EGP - Egyptian Pound" },
    { value: "EEK", label: "EEK - Estonian Kroon" },
    { value: "ETB", label: "ETB - Ethiopian Birr" },
    { value: "GEL", label: "GEL Georgian Lari" },
    { value: "GYD", label: "GYD - Guyanese Dollar" },
    { value: "IDR", label: "IDR - Indonesian Rupiah" },
    { value: "IQD", label: "IQD - Iraqi Dinar" },
    { value: "IRR", label: "IRR - Iranian Rial" },
    { value: "JOD", label: "JOD - Jordanian Dinar" },
    { value: "KGS", label: "KGS - Kyrgyzstanian Som" },
    { value: "LBP", label: "LBP - Lebanese Pound" },
    { value: "LRD", label: "LRD - Liberian Dollar" },
    { value: "MAD", label: "MAD - Moroccan Dirham" },
    { value: "MNT", label: "MNT - Mongolian Tugrik" },
    { value: "MUR", label: "MUR - Mauritius Rupee" },
    { value: "MWK", label: "MWK - Malawi Kwacha" },
    { value: "MYR", label: "MYR - Malaysian Ringgit" },
    { value: "MZN", label: "MZN - Mozambique new Metical" },
    { value: "OMR", label: "OMR - Omani Rial" },
    { value: "QAR", label: "QAR - Qatari Rial" },
    { value: "SLL", label: "SLL - Sierra Leone Leone" },
    { value: "TJS", label: "TJS - Tajikistani Somoni" },
    { value: "TMT", label: "TMT - Turkmenistan new Manat" },
    { value: "TZS", label: "TZS - Tanzanian Schilling" },
    { value: "UZS", label: "UZS - Uzbekistan Som" },
    { value: "WST", label: "WST - Samoan Tala" },
    { value: "XAF", label: "XAF - CFA Franc BEAC (1)" },
    { value: "XOF", label: "XOF - CFA Franc BCEAO (2)" },
  ];

  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(null);

  const handleClose = (event, reason) => {
    setOpen(false);
    Swal.fire({
      title: "Success!",
      text: "Money has been sent successfully.",
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

  const [walletAccount, setWalletAccount] = useState(
    sessionStorage.getItem("walletaccount")
  );
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${values.sendercurrency.toUpperCase()}`
      );
      const exchangeRate =
        response.data.rates[values.receivercurrency.toUpperCase()];
      const newConvertedValue = values.amount * exchangeRate;

      const response1 = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${values.sendercurrency.toUpperCase()}`
      );

      const exchangeRateINR = response1.data.rates.INR;
      const newCovertedvalueinr = values.amount * exchangeRateINR;

      const data = {
        senderaccount: values.senderaccount,
        receiveraccount: values.receiveraccount,

        amount: values.amount,
        sendercurrency: values.sendercurrency,
        receivercurrency: values.receivercurrency,
        // convertedValue: newConvertedValue,
        covertedvalueinr: (newCovertedvalueinr),
      };
      await axios
        .post("http://localhost:8080/api/moneytransfer/transfer", data, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res);

          setSubmitting(false);

          setOpen(true);

          setMsg(
            `Transferring ${values.amount} ${values.sendercurrency} (= ${newConvertedValue} ${(values.receivercurrency)})`
          );
        })
        .catch((error) => {
          console.log(error);
          setError(error.response.data);
        });
    } catch (err) {
      setSubmitting(false);
      setError(err.message);
    }
  };
  const validationSchema = Yup.object({
    senderaccount: Yup.number().required("amount is required"),
    receiveraccount: Yup.number()
      .required("8 digit account number is required"),
    amount: Yup.number().required("amount is required"),
    sendercurrency: Yup.string()
      .uppercase()
      .required("Sender's Currency code is required"),
    receivercurrency: Yup.string()
      .uppercase()
      .required("Receiver's Currency code is required"),
  });
  return (
    <div>
      {error && <p className="error alert alert-danger">{error}</p>}
      <Formik
        initialValues={{
          senderaccount: walletAccount,
          receiveraccount: "",

          amount: "",
          sendercurrency: "",
          receivercurrency: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div class="form-floating mb-3">
              <Field
                name="senderaccount"
                class="form-control"
                type="number"
                placeholder="Sender Account"
              />
              <label>Sender Account</label>
              <ErrorMessage
                name="senderaccount"
                component="div"
                className="error"
              />
            </div>
            <div class="form-floating mb-3">
              <Field
                name="receiveraccount"
                class="form-control"
                type="number"
                placeholder="receiver Acc"
              />
              <label>Receiver Account</label>
              <ErrorMessage
                name="receiveraccount"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div class="form-floating mb-3">
              <Field
                name="amount"
                class="form-control"
                type="number"
                placeholder="amount to convert"
              />
              <label>Amount</label>
              <ErrorMessage name="amount" component="div" className="error" />
            </div>
            <div className="form-floating mb-3">
              <Field
                name="sendercurrency"
                component="select"
                className="form-control"
              >
                <option value="" disabled>
                  Select Currency
                </option>
                {currencyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <label>Sender Currency</label>
              <ErrorMessage
                name="sendercurrency"
                component="div"
                className="error"
              />
            </div>
            <div class="form-floating mb-3">
              <Field
                name="receivercurrency"
                component="select"
                className="form-control"
              >
                <option value="" disabled>
                  Select Currency
                </option>
                {currencyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <label>Receipient's Currency</label>
              <ErrorMessage
                name="receivercurrency"
                component="div"
                className="error"
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary col-12"
              disabled={isSubmitting}
            >
              Transfer
            </button>
          </Form>
        )}
      </Formik>

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
