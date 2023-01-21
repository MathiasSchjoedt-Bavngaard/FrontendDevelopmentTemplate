import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { postAccountLogin } from "../Services/HttpRequest/httpService";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleLogin(e) {
    e.preventDefault();
    const loginResult = await postAccountLogin(email, password);
    if (loginResult === "Model") {
      navigate("/Jobs");
    } else if (loginResult === "Manager") {
      navigate("/ManageEmployes");
    } else {
      alert("Wrong email or password");
    }
  }

  return (
    //Login from Mui
    <div className="box">
      <h1>Model Management</h1>
      <form onSubmit={handleLogin}>
        <div className="EmailInput">
          <TextField
            id="email"
            label="Email adress"
            type="email"
            required
            autoFocus
            autoComplete="email"
            name="email"
            variant="filled"
            onChange={handleEmailChange}
          />
        </div>
        <div className="PasswordInput">
          <TextField
            id="password"
            label="Password"
            type="password"
            required
            autoComplete="current-password"
            name="password"
            variant="filled"
            onChange={handlePasswordChange}
          />
        </div>

        <div className="Submit-Knap">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
}
