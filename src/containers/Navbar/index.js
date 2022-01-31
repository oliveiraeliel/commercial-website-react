import React from "react";
import Button from "../../components/Button";
import SearchField from "../../components/SearchField";

import { Board } from "./styles";

export default function Navbar() {
  return (
    <Board>
      <SearchField />
      <>
        <Button
          text="Login"
          btnWidth="160px"
          btnHeight="60px"
          btnColor="--color-snow"
          txtColor="--color-dark-purple"
          txtSize="25px"
        />
        <Button
          text="Sign up"
          btnWidth="160px"
          btnHeight="60px"
          btnColor="--color-dark-purple"
          txtColor="--color-snow"
          txtSize="25px"
        />
      </>
    </Board>
  );
}
