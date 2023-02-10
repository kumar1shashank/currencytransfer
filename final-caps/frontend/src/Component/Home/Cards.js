import React from "react";
import fraudVideo from "../images/fraudVideo.mp4";
import comma from "../images/comma.png";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function Cards() {
  return (
    <div>
      <div style={{ backgroundColor: "#2A254B" }}>
        <div class="container text-center">
          <div class="row">
            <div class="col" >
              <video width="400" height="300" controls style={{paddingTop:"20px"}}>
                <source src={fraudVideo} type="video/mp4" />
              </video>
            </div>
            <div class="col" style={{ paddingTop: "50px", color: "white" }}>
              <h3>How does it work?</h3>
              <p>
                Any business, no matter what size, will have a large surface
                area for credit card theft and fraud. Here are some of the ways
                it can happen
              </p>
              <ul style={{textAlign: "left"}}>
                <li>
                  Criminals can obtain credit cards by either finding them after
                  they have become lost or stealing them from someone’s
                  possession.
                </li>

                <li>
                  This type of fraud does not require the criminal to have a
                  physical credit card. Instead, they will obtain basic details,
                  such as the account holder's name, the credit card number, and
                  the expiration date. With this information, they can commit
                  fraudulent activity by mail, via the phone, or online.
                </li>
                <li>
                  Devices known as skimmers can illegally obtain credit card
                  details. These machines capture information from the credit
                  card's magnetic strip, which the criminal can then encode into
                  a counterfeited, faked, or doctored card.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------- */}
      <div style={{textAlign: "center"}} >
      <h2>What people are saying about easyPay</h2>
      <h3>A payments experience people love to talk about</h3>
      </div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner" >
          <div class="carousel-item active">
            <div>
              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <img
                          src={comma}
                          alt="..."
                          style={{ height: "30px", width: "25px" }}
                        />
                        <Typography variant="h5" component="div">
                          Y'all always and consistently take care…
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          <b>Angela Garvin</b>, United States
                        </Typography>
                        <Typography variant="body2" style={{fontFamily: 'Dancing Script',  fontSize: '20px'}}>
                          Y'all always and consistently take care of business
                          and customers both! A very reputable company with a
                          long history of excellence. The speed at sending my
                          adult kids money always amazes me! Thank you!
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="col">
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <img
                          src={comma}
                          alt="..."
                          style={{ height: "30px", width: "25px" }}
                        />
                        <Typography variant="h5" component="div">
                          Secure and fast way to send money to my…
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          <b>CARLOS A SOTO</b>, Mexico
                        </Typography>
                        <Typography variant="body2" style={{fontFamily: 'Dancing Script',  fontSize: '20px'}}>
                          Secure and fast way to send money to my love ones. The
                          app on my cell phone 📲 is so convenient and I can use
                          it any time ⏲️ without me driving to my nearest
                          location 1 mile away. I love it!!!!
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="col">
                    <Card sx={{ minWidth: 275}}>
                      <CardContent>
                        <img
                          src={comma}
                          alt="..."
                          style={{ height: "30px", width: "25px" }}
                        />
                        <Typography variant="h5" component="div">
                          Easy to send money
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          <b>Cristina Llabería</b>, Argentina
                        </Typography>
                        <Typography variant="body2" style={{fontFamily: 'Dancing Script',  fontSize: '20px'}}>
                          It is very easy to make a transfer of money and it can
                          be picked up in minutes after completing the steps.
                          The only issue this last transfer was that the
                          exchange rate W.U. paid was quite lower than the
                          actual quotation in Argentina.
                          
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
          <div class="carousel-item">
            <div>
              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <img
                          src={comma}
                          alt="..."
                          style={{ height: "30px", width: "25px" }}
                        />
                        <Typography variant="h5" component="div">
                          I had to change the recipient's name
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          <b>Carlos Lazu</b>, United States
                        </Typography>
                        <Typography variant="body2"style={{fontFamily: 'Dancing Script',  fontSize: '20px'}}>
                          I was informed that I would have to cancel my money
                          request and submit a new one with the correct person's
                          name. I thought it was going to be a long and
                          complicated process, but it was fast and easy. So,
                          thank you for that, and for helping make the transfer
                          possible.
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="col">
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <img
                          src={comma}
                          alt="..."
                          style={{ height: "30px", width: "25px" }}
                        />
                        <Typography variant="h5" component="div">
                          Easy & Affordable
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          <b>Ram Kumar</b>, India
                        </Typography>
                        <Typography variant="body2" style={{fontFamily: 'Dancing Script',  fontSize: '20px'}}>
                          It's so very easy to send money to friends in the
                          Philippines. This website is easy to use and it only
                          takes a few minutes to complete the whole process.
                          I've done this several times now and it's always very
                          simple and easy.
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="col">
                    <Card sx={{ minWidth: 275, paddingBottom: "10px" }}>
                      <CardContent>
                        <img
                          src={comma}
                          alt="..."
                          style={{ height: "30px", width: "25px" }}
                        />
                        <Typography variant="h5" component="div">
                          Satisfied with the website
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          <b>Cristina Llabería</b>, Argentina
                        </Typography>
                        <Typography variant="body2" style={{fontFamily: 'Dancing Script',  fontSize: '20px'}}>
                          The only surprise I got today is that you are paying
                          the dollar at 344 Argentine pesos, while the quotation
                          is at 377. That makes quite a difference in the amount
                          received, even considering a rate of 372.
                          </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
          <div class="carousel-item">
            <div>
              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <img
                          src={comma}
                          alt="..."
                          style={{ height: "30px", width: "25px" }}
                        />
                        <Typography variant="h5" component="div">
                          Easy online service to send money…
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          <b>BRASILIA</b>, United Kingdom
                        </Typography>
                        <Typography variant="body2"style={{fontFamily: 'Dancing Script',  fontSize: '20px'}}>
                          Easy online service to send money internationally. I
                          can use my bank account or a credit card. However, the
                          fees are too high. Specially because I send money
                          every month. Maybe they should have a cheaper fee for
                          customers that use the service every month. This is
                          the reason I didn’t give them 5 stars.
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="col">
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <img
                          src={comma}
                          alt="..."
                          style={{ height: "30px", width: "25px" }}
                        />
                        <Typography variant="h5" component="div">
                          My overall experience with …
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          <b>MYRIAM</b>, Italy
                        </Typography>
                        <Typography variant="body2"style={{fontFamily: 'Dancing Script',  fontSize: '20px'}}>
                          My overall experience with western union was always
                          been good , if there’s any issues it always resolved
                          with no difficulties since I have been using the
                          company since 2016
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="col">
                    <Card sx={{ minWidth: 275}}>
                      <CardContent>
                        <img
                          src={comma}
                          alt="..."
                          style={{ height: "30px", width: "25px" }}
                        />
                        <Typography variant="h5" component="div">
                          Very convenient and efficient
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          <b>MOHAMED</b>, Pakistan
                        </Typography>
                        <Typography variant="body2"style={{fontFamily: 'Dancing Script',  fontSize: '20px'}}>
                          straight forward process to send money overseas to my
                          family. My brother picks the money easily in my home
                          country. The app is very easy to use. I can send money
                          from anywhere anytime. very convenient .
                          </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div
        style={{
          paddingTop: "50px",
          color: "white",
          backgroundColor: "#2A254B",
          textAlign: "center" 
        }}
        
      >
        
        <h2>Awesome Customer Support</h2>
        <h4>
          Have you any query? Don't worry. We have great people ready to help
          you whenever you need it.
        </h4>
      </div>
    </div>
  );
}
