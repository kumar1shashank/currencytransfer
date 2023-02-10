import React from "react";
import error from "../images/error.jpg"
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div>
   <Link to="/Home"> <img src={error}  alt="error" style={{height:"800px",width:"1200px"}}/> </Link>
    </div>
  );
}
