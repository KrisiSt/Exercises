import React, { useState } from "react";
import "./App.css";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form>
        <div>
          <label>Име</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Имейл</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Парола</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="button" onClick={clearForm}>
          Изчисти
        </button>
      </form>

      <div className="result">
        <p>Въведено име: {name}</p>
        <p>Въведен имейл: {email}</p>
        <p>Въведена парола: {password}</p>
      </div>
    </>
  );
};

export default RegistrationForm;
