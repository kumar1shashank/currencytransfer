import React from "react";
import easypay from "../images/easypay.png";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import HeaderLog from "./HeaderLog.js";

export default function Header() {
  const navigate = useNavigate();

  
    if (sessionStorage.getItem("token")) 
    {
      return (
        <div>
          <nav className="navbar navbar-expand-lg border-bottom">
            <div className="container-fluid">
              <Link className="navbar-brand " to="/Home">
                <img
                  src={easypay}
                  alt="..."
                  style={{ width: "120px", height: "50px" }}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/Slider"
                    >
                      SEND
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/ReceivePayment"
                    >
                      RECEIVE
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/MoneyAdd"
                    >
                      ADD MONEY
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/Profile"
                    >
                      DASHBOARD
                    </Link>
                  </li>
                </ul>

                <Dropdown />
              </div>
            </div>
          </nav>
        </div>
      );
   } 
   else {
      return (<HeaderLog />);
    }
  
}

// import React from "react";
// import easypay from "../images/easypay.png";
// import { Link, useNavigate } from "react-router-dom";
// import Dropdown from "./Dropdown";
// import HeaderLog from "./HeaderLog.js";

// export default function Header() {
//   const navigate = useNavigate();

//   if (sessionStorage.getItem("token")) 
//     {
//       return (
//         <div>
//           <nav className="navbar navbar-expand-lg border-bottom">
//             <div className="container-fluid">
//               <Link className="navbar-brand " to="/Home">
//                 <img
//                   src={easypay}
//                   alt="..."
//                   style={{
//                     width: "120px",
//                     height: "50px",
//                     borderRadius: "50%",
//                     overflow: "hidden",
//                   }}
//                 />
//               </Link>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div
//                 className="collapse navbar-collapse"
//                 id="navbarSupportedContent"
//               >
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                   <li className="nav-item">
//                     <Link
//                       className="nav-link active"
//                       aria-current="page"
//                       to="/Slider"
//                     >
//                       SEND
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link
//                       className="nav-link active"
//                       aria-current="page"
//                       to="/ReceivePayment"
//                     >
//                       RECEIVE
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link
//                       className="nav-link active"
//                       aria-current="page"
//                       to="/MoneyAdd"
//                     >
//                       ADD MONEY
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link
//                       className="nav-link active"
//                       aria-current="page"
//                       to="/Profile"
//                     >
//                       DASHBOARD
//                     </Link>
//                   </li>
//                 </ul>

//                 <Dropdown />
//               </div>
//             </div>
//           </nav>
//         </div>
//       );
//     } 
//     else {
//       return (<HeaderLog />);
//     }
  
// }

