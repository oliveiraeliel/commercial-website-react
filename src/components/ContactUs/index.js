import React from "react";

import { TextField, TextareaAutosize } from "@mui/material";

import { Body, EmailBox, Infos, Title } from "./styles";

export default function ContactUs() {
  return (
    <Body>
      <Infos>
        <Title>Contact us</Title>
        <Title>Contact us</Title>
      </Infos>
      <EmailBox>
        <div className="header">
          <TextField className="input" placeholder="your-email@example.com" />
          <TextField className="input" placeholder="Subject" />
        </div>
        <TextareaAutosize
          className="input textarea"
          placeholder="Your text cames here :D"
        />
      </EmailBox>
    </Body>
  );
}
