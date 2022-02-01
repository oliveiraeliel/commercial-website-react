import React from "react";
import Button from "../Button";

import { BoxBody, Name, Price, ProductImg, NewPrice } from "./styles";

export default function Box(props) {
  return (
    <BoxBody href="/home" >
      <ProductImg src={props.url}></ProductImg>
      <Name>{props.name}</Name>
      <Price onSale={props.onSale}>R$ {props.price}</Price>
      <NewPrice>
        {props.newPrice}
      </NewPrice>
      {/* <Button btnWidth="290px" btnHeight="40px" text="Buy" btnColor="--color-dark-purple" txtColor="--color-white" /> */}
    </BoxBody>
  );
}
