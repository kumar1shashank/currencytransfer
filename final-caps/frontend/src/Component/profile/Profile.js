import * as React from "react";
import axios from "axios";
import wallet from "../images/wallet.png";
import contactUs from "../images/contactUs.jpg";
import Transaction from "./Transaction";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import CardActions from "@mui/material/CardActions";
import { Avatar } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function Profile() {
  const [profile, setProfile] = useState([]);

  const getProfile = async () => {
    try {
      const response = await axios.get(
        ` http://localhost:8080/api/customers/accountbalance/${sessionStorage.getItem(
          "walletaccount"
        )}`
      );

      setProfile(response.data);
    } catch (error) {
      console.log("my error is " + error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div style={{ bgcolor: "grey" }}>
      <div className="container text-center mt-3">
        <div className="row pr-2">
          <div className="col-3">
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">
                <React.Fragment>
                  <CardContent>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      <Avatar
                        src="/broken-image.jpg"
                        sx={{ width: "250", height: "250" }}
                      />
                    </StyledBadge>
                    <h5>Name</h5>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {profile.fname},{profile.lname}
                    </Typography>
                  </CardContent>
                </React.Fragment>
              </Card>
            </Box>{" "}
            <div className="mt-3">
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                  <CardContent>
                    <img src={wallet} alt="wallet" />
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Balance: &#8377;{profile.walletbalance}
                      <span style={{ color: "black" }}> {profile.balance}</span>
                    </Typography>
                  </CardContent>
                  <hr />
                  <CardActions>
                    <Link className="btn" size="small" to="/Slider">
                      Send
                    </Link>
                    <Link className="btn" size="small" to="/MoneyAdd">
                      Add Money
                    </Link>
                  </CardActions>
                </Card>
              </Box>{" "}
            </div>
            <div className="mt-3">
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                  {" "}
                  <CardContent>
                    <img src={contactUs} alt="contact us" />
                    <Typography variant="h5" component="div">
                      Need Help?
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Have questions or concerns regrading your account? Our
                      experts are here to help!.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#2A254B" }}
                      className="col-12"
                    >
                      Contact Us
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </div>
          </div>
          <div className="col-8 border-start">
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
}
