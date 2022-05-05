import React from "react";

import { BoxBody, Name, Price, ProductImg, OnSalePrice } from "./styles";

export default function Box(props) {
  return (
    <BoxBody href={`product?id=${props._id}`}>
      <ProductImg src={props.url}></ProductImg>
      <Name>{props.name}</Name>
      <Price _onSale={props._onSale}>R$ {props.price}</Price>
      <OnSalePrice>{props._onSalePrice}</OnSalePrice>
    </BoxBody>
  );
}
