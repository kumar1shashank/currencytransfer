import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import easypay from "../images/easypay.png";

export default function HeaderLog() {
  return (
    <div>
      {/* //nav bar */}
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src={easypay}
                alt="..."
                style={{ width: "150px", height: "50px" }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/Aboutus">
                    FAQ's
                  </Link>
                </li>
            </ul>
              <span className="navbar-text">
                <form className="d-flex" role="search">
                  <Link
                    className="btn btn-outline-success"
                    type="submit"
                    to="/Signin"
                  >
                    LOGIN
                  </Link>
                  <Link
                    className="btn"
                    type="submit"
                    style={{ backgroundColor: "#2A254B", color: "white" }}
                    to="/Register"
                  >
                    SIGNUP
                  </Link>
                </form>
              </span>
            </div>
          </div>
        </nav>
      </div>
      {/* nav bar closed  */}
    </div>
  )
}
