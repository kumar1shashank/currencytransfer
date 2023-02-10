import React, {useEffect}from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.PNG";

import transfermoney from "../images/transfermoney.jpg";

import moon from "../images/moon.png";
import c5payany from "../images/c5payany.webp";
import c5shopping from "../images/c5shopping.webp";

import c6cardimg from "../images/c6cardimg.webp";
import c6cardpay from "../images/c6cardpay.webp";

export default function IntroPage() {
  
  return (
    <div>
      {/* Component 1 */}
      <div className="container text-center">
        <div class="row">
          <div class="col mt-10" style={{ paddingTop: "150px" }}>
            <h1>India's Most-loved Currency Transfer App </h1>
            <p>
              Recharge & pay bills, book flights & movie tickets, open a savings
              account, invest in stocks & mutual funds, and do a lot more.
            </p>
          </div>
          <div class="col">
            <img
              src={transfermoney}
              alt="image"
              style={{ width: "600px", height: "450px" }}
            />
          </div>
        </div>
      </div>
      {/* Component 4 */}
      <div
        style={{
          backgroundColor: "#D3D3D3",
          paddingLeft: "45px",
          paddingBottom: "50px",
          paddingTop: "50px",
        }}
      >
        <h2>EasyPay Payment Instruments</h2>
        {/* Component 5 */}
        <div
          class="container text-center"
          style={{
            backgroundColor: "white",
            paddingLeft: "45px",
            paddingBottom: "50px",
            paddingTop: "50px",
            paddingRight: "50px",
          }}
        >
          <div class="row">
            <div class="col" style={{ paddingTop: "150px" }}>
              <h2>The Fastest Way to Transfer Money Anywhere, AnyTime.</h2>
              <p>
                Load up your EasyPay Wallet for free and make payments in a
                jiffy at over 21 million stores, websites and apps.
              </p>
            </div>
            <div class="col">
              <img
                src={moon}
                alt="mobile"
                style={{ height: "500px", width: "500px" }}
              />
            </div>
          </div>
        </div>
        <div
          class="container text-center mt-5"
          style={{
            backgroundColor: "white",
            paddingLeft: "45px",
            paddingBottom: "50px",
            paddingTop: "50px",
            paddingRight: "50px",
          }}
        >
          <div class="row">
            <div class="col">
              <img
                src={c5payany}
                alt="mobile"
                style={{ height: "500px", width: "500px" }}
              />
            </div>
            <div class="col" style={{ paddingTop: "150px" }}>
              <h2>Pay anyone directly from your EasyPay account.</h2>
              <p>
                Pay anyone, everywhere. Make contactless & secure payments
                in-stores or online using Paytm Wallet or Directly from your
                Bank Account. Plus, send & receive money from anyone.
              </p>
            </div>
          </div>
        </div>
        <div
          class="container text-center mt-5"
          style={{
            backgroundColor: "white",
            paddingLeft: "45px",
            paddingBottom: "50px",
            paddingTop: "50px",
            paddingRight: "50px",
          }}
        >
          <div class="row">
            <div class="col" style={{ paddingTop: "150px" }}>
              <h2>Want it? No more waiting for it.</h2>
              <p>
                With EasyPay Postpaid, your wishlist doesn't have to be on the
                waitlist. Shop for the things you want today and pay for them
                next month.
              </p>
            </div>
            <div class="col">
              <img
                src={c5shopping}
                alt="mobile"
                style={{ height: "500px", width: "500px" }}
              />
            </div>
          </div>
        </div>

        {/* Component 6 */}
        <div
          class="container text-center mt-5"
          style={{
            backgroundColor: "white",
            paddingLeft: "45px",
            paddingBottom: "50px",
            paddingTop: "50px",
            paddingRight: "50px",
          }}
        >
          <div class="row">
            <div class="col mr-2" style={{ paddingTop: "50px" }}>
              <h2>Unlimited Cashback Every time</h2>
              <p>
                Add Money To EasyPay Account With You Credit Card And Get Assured
                Cashback And Incredible Offers.
              </p>
              <img
                src={c6cardpay}
                alt="mobile"
                style={{ height: "500px", width: "500px" }}
              />
            </div>
            <div class="col" style={{ paddingTop: "50px" }}>
              <h2>India’s Most Trusted Money Transfer App</h2>
              <p>
                EasyPay SBI Card SELECT - With Intelligent Features & Great
                Rewards that Never Expire
              </p>
              <img
                src={c6cardimg}
                alt="mobile"
                style={{ height: "500px", width: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
  window.location.reload(true);
}
