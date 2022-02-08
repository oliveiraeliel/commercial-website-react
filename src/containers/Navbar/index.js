import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import env from "react-dotenv";

import {
  Nav,
  Logo,
  Hamburger,
  Menu,
  MenuLink,
  SearchField,
  Search,
  Logout,
} from "./styles";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  
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
        <MenuLink style={{ display: props.logged ? "block" : "none" }}>
          {props.name}
        </MenuLink>
        <MenuLink href="#on-sale">On sale</MenuLink>
        <MenuLink href="#catalog">Catalog</MenuLink>
        <MenuLink
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
          style={{ display: props.logged ? "block" : "none" }}
        >
          Logout
        </MenuLink>
        <MenuLink
          style={{
            display:
              user !== null && user.email == process.env.REACT_APP_ADMIN
                ? "block"
                : "none",
          }}
          href="/admin"
        >
          <AiFillSetting />
        </MenuLink>
        <MenuLink
          href="/login"
          style={{ display: !props.logged ? "block" : "none" }}
        >
          <Button
            text="Login"
            btnColor="--color-turquoise-blue"
            txtColor="--color-dark-purple"
            btnWidth="100px"
            btnHeight="25px"
          />
        </MenuLink>
        <MenuLink
          href="/sign-up"
          style={{ display: !props.logged ? "block" : "none" }}
        >
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
