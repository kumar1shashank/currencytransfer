//CARD

import React from "react";
import style from "./style.css";

export default function AddMoney() {

    

  return (
    <div style={{ marginBottom: "150px"  }}>
      <div class="mycards">
        <figure class="card__figure">
          <img
            src="https://conta.nubank.com.br/images/nu-white.png" alt="card"
            class="card__figure--logo"
          ></img>
        </figure>
        <div class="card__reader">
          <div class="card__reader--risk card__reader--risk-one"></div>
          <div class="card__reader--risk card__reader--risk-two"></div>
          <div class="card__reader--risk card__reader--risk-three"></div>
          <div class="card__reader--risk card__reader--risk-four"></div>
        </div>
        <p class="card__number">5032 9334 3764 9846</p>
        <div class="card__dates">
          <span class="card__dates--first">09/16</span>
          <span class="card__dates--second">09/19</span>
        </div>
        <p class="card__name">GABRIEL FERREIRA</p>
        <div class="card__flag">
          <div class="card__flag--globe"></div>
          <div class="card__flag--red"></div>
          <div class="card__flag--yellow"></div>
        </div>
        </div>
      
    </div>
  );
}
