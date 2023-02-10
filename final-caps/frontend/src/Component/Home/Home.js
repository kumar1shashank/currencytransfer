import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Cards from "./Cards.js";
import ExpireTime from "./ExpireTime"

import Freelancer from "../images/Freelancer.png";
import booking from "../images/booking.webp";
import selling from "../images/selling.jpg";
import shopping from "../images/shopping.jpg";
import corousel2 from "../images/corousel2.jpg";

export default function Home() {
  return (
    <div>
      <ExpireTime />
      <img
        src={corousel2}
        className="d-block w-100"
        alt="..."
        style={{ height: "450px" }}
      />

      {/* ---------------------------------------------------------------- */}
      <br />
      <div style={{ textAlign: "center" }}>
        <h2 Style={{ fontFamily: "Inter" }}>Why should you choose EasyPay?</h2>
        <h4>
          Here’s Top 4 reasons why using a Payyed account for manage your money.
        </h4>
        <br />
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Card sx={{ minWidth: 200 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Easy to use
                </Typography>
                <Typography variant="body2">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>

          <div className="col">
            <Card sx={{ minWidth: 200 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Faster Payments
                </Typography>
                <Typography variant="body2">
                  Persius interesset his et, in quot quidam persequeris vim, ad
                  mea essent possim iriure.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>

          <div className="col">
            <Card sx={{ minWidth: 200 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Lower Fees
                </Typography>
                <Typography variant="body2">
                  Essent lisque persius interesset his et, in quot quidam
                  persequeris vim, ad mea essent possim iriure.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>

          <div className="col">
            <Card sx={{ minWidth: 200 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  100% secure
                </Typography>
                <Typography variant="body2">
                  Quidam lisque persius interesset his et, in quot quidam
                  persequeris vim, ad mea essent possim iriure.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
      <br />

      {/* ------------------------------------- */}
      <div style={{ backgroundColor: "#2A254B", backgroundSize: "cover" }}>
        <div
          className="container text-center d-flex"
          style={{
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <div className="row ">
            <div
              className="col-6"
              style={{ paddingTop: "150px", color: "white" }}
            >
              <h1>Payment Solutions for everyone.</h1>
              <p>
                {" "}
                Quidam lisque persius interesset his et, in quot quidam
                persequeris vim, ad mea essent possim iriure. <br />
                Lisque persius interesset his et, in quot quidam persequeris
                vim, <br />
                ad mea essent possim iriure. lisque persius interesset his et,
                in quot quidam mea essent possim iriure.
                <br />
              </p>
            </div>

            <div
              className="col-6"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <div
                className="card mt-3"
                style={{ width: "15rem", marginRight: "20px" }}
              >
                <img
                  src={Freelancer}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "150px" }}
                />
                <div className="card-body bg-transparent">
                  <p className="card-text">Freelancer</p>
                </div>
              </div>
              <div className="card mt-3" style={{ width: "15rem" }}>
                <img
                  src={shopping}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "150px" }}
                />
                <div className="card-body">
                  <p className="card-text">Online Shopping</p>
                </div>
              </div>

              <div
                className="card mt-3  "
                style={{ width: "15rem", marginRight: "20px" }}
              >
                <img
                  src={selling}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "150px" }}
                />
                <div className="card-body">
                  <p className="card-text">Online selling</p>
                </div>
              </div>
              <div className="card mt-3" style={{ width: "15rem" }}>
                <img
                  src={booking}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "150px" }}
                />
                <div className="card-body">
                  <p className="card-text">Booking</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div style={{ textAlign: "center" }}>
        <h1>What can you do with Payyed?</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <Cards />
    </div>
  );
}
