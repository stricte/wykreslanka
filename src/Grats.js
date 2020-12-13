import React from "react";

import "./Grats.scss";
import safetyPin from "./images/ico_info2.png";

const Grats = ({ username, safetyPins, onAgain }) => (
  <div className="Grats">
    <h1 className="Title">Gratulacje {username}!</h1>

    <p>Idzie Ci coraz lepiej. Za każdą wygraną zbierasz agrafki.</p>

    <p>
      Twój wynik to <strong>{safetyPins}</strong>
    </p>

    <img alt="agrafka" src={safetyPin} />

    <a
      className="btn red"
      href="#reset"
      onClick={(e) => {
        e.preventDefault();
        onAgain();
      }}
    >
      Jeszcze raz?
    </a>
  </div>
);

export default Grats;
