import React from "react";

import { Box, Infos, Img, Name, OnSalePrice, Price, SubInfos } from "./styles";

export default function SuggestionBar(props) {
  return (
    <Box href={`product?id=${props._id}`} onsale={props.onsale}>
      <Infos>
        <Img src={props.img}></Img>
        <SubInfos>
          <Name>{props.name}</Name>
          <Price _onSale={props._onSale}>R$ {props.price}</Price>
          <OnSalePrice style={{ display: props._onSale ? "block" : "none" }}>
            R$ {props._onSalePrice}
          </OnSalePrice>
        </SubInfos>
      </Infos>
    </Box>
  );
}
