import React, { useState, useEffect } from "react";
import {
  TextField,
  FormControl,
  InputAdornment,
  Input,
  InputLabel,
  IconButton,
} from "@mui/material";

import { api } from "../../Api";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import { Form, FormItem, Section, Erro } from "../SignUp/styles";
import Button from "../../components/Button";

export default function Login() {
  document.title = "Login";

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [erro, setErro] = useState(false);

  function handleClickLogin() {
    api
      .post("/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href = "/";
      })
      .catch((err) => setErro(true));
  }

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <Section>
      <Form>
        <h1>Login</h1>

        <FormItem>
          <TextField
            type="email"
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <FormControl style={{ width: "20rem" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </FormItem>
        <FormItem>
          <Button
            btnWidth="20rem"
            btnHeight="40px"
            text="Sign up"
            txtColor="--color-white"
            btnColor="--color-dark-purple"
            onClick={handleClickLogin}
            txtSize="1.5rem"
          />
        </FormItem>
        <FormItem>
          <Erro style={{ visibility: erro ? "visible" : "hidden" }}>
            Incorrect data!
          </Erro>
        </FormItem>
      </Form>
    </Section>
  );
}
