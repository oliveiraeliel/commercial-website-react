import styled from "styled-components";
import * as box from "../Box/styles";

export const Box = styled.a`
  text-decoration: none;
  color: black;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  width: 40vw;
  height: 10rem;
  border: 1px solid black;
  background-color: white;
  border-radius: 5px;
`;

export const Img = styled.img``;

export const Name = styled.a`
  font-size: 2rem;
`;

export const Price = styled(box.Price)`
  font-size: ${(props) => (props._onSale ? "1.5rem" : "2.5rem")};
  font-weight: ${(props) => (props._onSale ? "300" : "500")};
  text-decoration: ${(props) => (props._onSale ? "line-through" : "none")};
`;

export const OnSalePrice = styled(box.OnSalePrice)``;

export const SubInfos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
