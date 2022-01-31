import React from "react";

import { Btn } from "./styles";

export default function Button(props) {
  return (
    <Btn
      btnColor={props.btnColor}
      btnWidth={props.btnWidth}
      btnHeight={props.btnHeight}
      txtColor={props.txtColor}
      txtSize={props.txtSize}
      onClick={props.onClick}
    >
      {props.text}
    </Btn>
  );
}
