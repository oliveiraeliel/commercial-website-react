import React from "react";

import { BsGithub } from "react-icons/bs";

import { FooterBody } from "./styles";

export default function Footer() {
  return (
    <FooterBody>
      Made with love by{" "}
      <a href="https://github.com/oliveiraeliel">
        oliveiraeliel <BsGithub />
      </a>
    </FooterBody>
  );
}
