import React from "react";
import { Board } from "./styles";
import { BiSearchAlt } from "react-icons/bi";

export default function SearchField() {
  return (
    <Board>
      <span>
        <BiSearchAlt
          style={{ fontSize: "30px", color: "var(--color-dark-purple)" }}
        />
      </span>
      <input></input>
    </Board>
  );
}
