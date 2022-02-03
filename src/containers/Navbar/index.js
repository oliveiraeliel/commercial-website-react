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
        <a>Ji.shirts</a>
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
        <MenuLink href="#on-sale">On sale</MenuLink>
        <MenuLink href="#catalog">Catalog</MenuLink>
        <MenuLink href="/login">
          <Button
            text="Login"
            btnColor="--color-turquoise-blue"
            txtColor="--color-dark-purple"
            btnWidth="100px"
            btnHeight="25px"
            
          />
        </MenuLink>
        <MenuLink href="/sign-up">
          <Button
            text="Sign up"
            btnColor="--color-dark-purple"
            txtColor="--color-white"
            btnWidth="100px"
            btnHeight="25px"
          />
        </MenuLink>
      </Menu>
    </Nav>
  );
}
