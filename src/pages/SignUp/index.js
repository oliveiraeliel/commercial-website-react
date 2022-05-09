import React, { useState } from "react";
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

import { Form, FormItem, Section, Erro } from "./styles";
import { Button } from "../../components";

export default function SignUp() {
  document.title = "Sign up";

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [erro, setErro] = useState(false);
  const [erroMessage, setErroMessage] = useState(null);

  function handleClickSignUp() {
    if (
      name === null ||
      fullName === null ||
      email === null ||
      password === null
    ) {
      setErro(true);
      setErroMessage("Fill in all fields");
      return;
    }
    api
      .post("/user", {
        name: name,
        fullName: fullName,
        email: email,
        _password: password,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href = "/";
      })
      .catch((err) => {
        setErro(true);
        setErroMessage("Email unavailable");
      });
  }

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <Section>
      <Form>
        <h1>Sign up</h1>
        <FormItem>
          <TextField
            label="Name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <TextField
            label="Full name"
            variant="standard"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormItem>
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
            onClick={handleClickSignUp}
            txtSize="1.5rem"
          />
        </FormItem>
        <FormItem>
          <Erro style={{ visibility: erro ? "visible" : "hidden" }}>
            {erroMessage}
          </Erro>
        </FormItem>
      </Form>
    </Section>
  );
}
