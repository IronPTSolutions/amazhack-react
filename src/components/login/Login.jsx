import "./Login.css";
import React, { useState } from "react";
import InputWithLabel from "./input-with-label/InputWithLabel";
import { login } from "../../services/api.service";
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';




export default function Login({ user, logIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then((user) => {
        logIn(user)
      }) // Hmmm... maybe we should do something with this information?
      .catch((e) => setError(e.response.data.message));
  };

  if (user) {
    return <Redirect to="/products" />;
  }

  return (
    <div className="Login">
      {error && <p>There was an error: {error}</p>}
      <form onSubmit={onSubmit}>
        <InputWithLabel
          value={email}
          label="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <InputWithLabel
          value={password}
          label="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <div className='pt-3'>
          <Button variant="contained" color="primary" type='submit'>
            Login
      </Button>
        </div>

      </form>
    </div>
  );
}
