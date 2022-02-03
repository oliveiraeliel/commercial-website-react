import React, { useState, useEffect } from "react";
import {
  TextField,
  FormControl,
  InputAdornment,
  Input,
  InputLabel,
  fabClasses,
  IconButton,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import { Form } from "../AddProduct/styles";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }
useEffect(() => {
  console.log(`${name} ${fullName} ${email} ${password}`);
}, [password]);

  return (
    <Form>
      <TextField
        label="Name"
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Full name"
        variant="standard"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <TextField
        type="email"
        label="Email"
        variant="standard"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
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
    </Form>
  );
}
