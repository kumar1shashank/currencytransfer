import React, { useState } from "react";
import transferSuccessful from "../images/transferSuccessful.gif"
import "./modalsStyle.css";

export default function Modals() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal); //if true will chenge it to false and vice-versa
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <div className="modal">
        <div onClick={toggleModal} className="overlay">
          <div className="modal-content">
            <img src="transferSuccessful" alt="transfer successful" />
            <button className="close-modal" onclick={toggleModal}>
              close{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
