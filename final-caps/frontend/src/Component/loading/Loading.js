import React from "react";
import loading from "../images/loading.gif";

export default function Loading() {
  return (
    <div style={{ bgColor: "#2A254B" }}>
      <img
        src={loading}
        alt="loading"
        style={{
          width: "700px",
          height: "700px",
          display: "flex",
          justifyContent: "center",
          marginRight:'auto',
          marginLeft:'auto',
          marginTop:'20px'
        }}
      />
    </div>
  );
}
