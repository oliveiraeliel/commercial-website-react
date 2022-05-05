import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";

import { similarity } from "../../utils/similarity";

import {
  Nav,
  Logo,
  Hamburger,
  Menu,
  MenuLink,
  SearchField,
  Search,
} from "./styles";

import SuggestionBar from "../SuggestionBar";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const products = JSON.parse(localStorage.getItem("products"));

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Nav>
      <Logo>
        <a>Ji.shirts</a>
      </Logo>
      <div>
        <SearchField>
          <Search
            placeholder="Search for some product..."
            onChange={(e) => {
              setSearch(
                similarity(e.target.value, products, ["brand", "name"])
              );
            }}
          ></Search>
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
        <div style={{ position: "absolute" }}>
          {search
            ? search.map((item) => {
                return (
                  <SuggestionBar
                    name={capitalizeFirstLetter(item.name)}
                    price={item.price}
                    _onSale={item.onSale}
                    _onSalePrice={item.onSalePrice}
                    img={item.imageURL}
                    _id={item._id}
                  />
                );
              })
            : ""}
        </div>
      </div>
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
