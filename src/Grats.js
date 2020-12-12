import React from "react";

import "./Grats.scss";

const Grats = ({ username, onAgain }) => (
  <div className="Grats">
    <h1 className="Title">Gratulacje {username}!</h1>

    <p>Idzie ci coraz lepiej. Za każdą wygraną zbierasz punkty.</p>

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
