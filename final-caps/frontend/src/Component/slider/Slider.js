import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

import ToWallet from "../ToWallet/ToWallet";
import OtherTran from "../OtherTrans/OtherTran";
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter";

function Slider() {
  const navigate = useNavigate();
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };


  return (

    <div className="container" sx={{boxShadow: "0 0 20px 5px rgba(0, 0, 0, 0.15)"}}>
  <div className="row">
    <div className="col-8">
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50 border">
      <div >
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between border border-5 rounded-2"
        >
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab1")}
              active={justifyActive === "tab1"}
            >
              To EasyPay Account
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
            >
              To Other Bank Account
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "tab1"}>
            <ToWallet />
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "tab2"}>
            <OtherTran />
          </MDBTabsPane>
        </MDBTabsContent>
      </div>
    </MDBContainer>
    </div>
    <div className="col-4">
      <CurrencyConverter />
    </div>
    </div>
    </div>
  );
  window.location.reload(true);
}

export default Slider;
