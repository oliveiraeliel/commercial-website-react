import styled from "styled-components";

export const BoxBody = styled.a`
  position: relative;
  display: grid;
  grid-template-rows: repeat(3, 2fr);
  grid-auto-flow: row dense;
  grid-gap: 1rem;
  width: 20rem;
  height: 500px;
  border: 0.1px solid var(--color-tyrian-purple);
  padding: 1rem 1rem 3rem;
  text-decoration: none;
  color: black;
  background-color: var(--color-snow);
  text-align: center;
  margin: auto;
  &:hover {
    background-color: var(--color-turquoise-blue);
  }
  @media (max-width: 768px) {
    height: 470px;
  }
`;

export const Name = styled.a`
  font-size: 1.9rem;
  font-weight: 300;
`;

export const Price = styled.a`
  font-size: ${(props) => (props._onSale ? "1.5rem" : "2.5rem")};
  font-weight: ${(props) => (props._onSale ? "300" : "500")};
  text-decoration: ${(props) => (props._onSale ? "line-through" : "none")};
`;

export const OnSalePrice = styled.a`
  font-size: 2.5rem;
  font-weight: 600;
`;

export const ProductImg = styled.img`
  min-height: 340px;
  max-width: 300px;

  @media (max-width: 768px) {
    min-height: 300px;
    max-width: 250px;
    margin: auto;
  }
`;
