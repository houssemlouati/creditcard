import React from "react";
import "./creditcard.css";
import LOGOBH from "./BH_BANK.png";

export default function Affiche(props) {
  return (
    <div className="credit-card">
      <div className="credit-card__logo">
        <img src={LOGOBH} style={{ height: 50 }} alt=""></img>
      </div>

      <div className="credit-card__number">{props.setNumber}</div>

      <div className="credit-card__info">
        <div className="credit-card__info_name">
          <div className="credit-card__info_label">CARDHOLDER'S NAME</div>
          <div>{props.holdername.toUpperCase()}</div>
        </div>

        <div className="credit-card__info_expiry">
          <div className="credit-card__info_label">VALID UP TO</div>
          <div>{props.setMMYY}</div>
        </div>
      </div>
    </div>
  );
}
