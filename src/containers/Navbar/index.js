import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { BiSearchAlt } from "react-icons/bi";

import {
  Nav,
  Logo,
  Hamburger,
  Menu,
  MenuLink,
  SearchField,
  Search,
} from "./styles";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo>
        <a>Logo</a>
      </Logo>
      <SearchField>
        <Search placeholder="Search for some product..."></Search>
        <BiSearchAlt
          style={{
            borderRadius: "0 14px 14px 0",
            border: "1px solid var(--color-lapis-lazuli)",
            padding: "0.3rem",
            backgroundColor: "var(--color-lapis-lazuli)",
            color: "var(--color-white)",
          }}
        />
      </SearchField>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        {/* <MenuLink href="#"></MenuLink> */}
        <MenuLink href="#">About</MenuLink>
        <MenuLink href="#">Login</MenuLink>
        <MenuLink href="#">Sign up</MenuLink>
      </Menu>
    </Nav>
  );
}
