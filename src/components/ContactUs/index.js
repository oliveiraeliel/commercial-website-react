import React from "react";

import { TextField, TextareaAutosize } from "@mui/material";

import { Body, EmailBox } from "./styles";

export default function ContactUs() {
  return (
    <Body>
      <h1 className="contactus">Contact us</h1>
      <EmailBox>
        <div className="header">
          <TextField className="input" placeholder="your-email@example.com" />
          <TextField className="input" placeholder="Subject" />
        </div>
        <TextareaAutosize className="input textarea"  placeholder="Your text cames here :D" />
      </EmailBox>
    </Body>
  );
}
