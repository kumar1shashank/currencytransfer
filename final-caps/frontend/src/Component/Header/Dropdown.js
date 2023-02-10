import React from "react";
import { Link, useNavigate } from "react-router-dom";
import person from "../images/person.svg";

export default function Dropdown() {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.clear();
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("walletaccount")
    sessionStorage.removeItem("UserFname")
    sessionStorage.removeItem("UserLname")
    sessionStorage.removeItem("FullName")
    navigate("/IntroPage");
  };
  return (
    <div>
      <div className="dropdown btn-group dropstart">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ backgroundColor: "#2A254B" }}
        >
          <img src={person} alt="user" style={{height:"30px"}} />
        </button>
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item">
              {sessionStorage.getItem("FullName")}
            </button>
          </li>
          <li>
            <button className="dropdown-item">
             Account-Number : {sessionStorage.getItem("walletaccount")}
            </button>
          </li>
          <hr />
          <li>
            <Link className="dropdown-item" to="/Profile">Dashboard</Link>
          </li>
          <li>
            <button className="dropdown-item" onClick={signOut}>
              Signout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
