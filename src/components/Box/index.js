import React from "react";
import Button from "../Button";

import { BoxBody, Name, Price, ProductImg, NewPrice } from "./styles";

export default function Box(props) {
  return (
    <BoxBody href={`product?id=${props._id}`}>
      <ProductImg src={props.url}></ProductImg>
      <Name>{props.name}</Name>
      <Price _onSale={props._onSale}>R$ {props.price}</Price>
      <NewPrice>{props.newPrice}</NewPrice>
      {/* <Button btnWidth="290px" btnHeight="40px" text="Buy" btnColor="--color-dark-purple" txtColor="--color-white" /> */}
    </BoxBody>
  );
}
