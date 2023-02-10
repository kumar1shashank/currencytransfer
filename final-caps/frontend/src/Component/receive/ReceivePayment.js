import React from "react";
import QRCode from "../images/QRCode.png";

export default function ReceivePayment() {
  return (
    <div>
      <div
        
      >
        <img
          src={QRCode}
          alt="QR Code"
          style={{
            width: "350px",
            height: "500px",
            objectFit: "fill",
            display: "block",
            paddingTop: "45px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
    </div>
  );
}
