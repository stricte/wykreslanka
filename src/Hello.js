import React, { useState } from "react";

import "./Hello.scss";

const Hello = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  return (
    <div className="Hello">
      <h3>Witaj</h3>
      <p>Jak się nazywasz?</p>
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          username.length > 0 ? onSubmit(username) : alert("Podaj swoje imię");
        }}
      >
        <input
          id="username"
          name="username"
          type="text"
          autoFocus={true}
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input className="btn white" type="submit" value="Zagrajmy" />
      </form>
    </div>
  );
};

export default Hello;
