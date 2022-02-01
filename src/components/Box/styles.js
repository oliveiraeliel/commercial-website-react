import styled from "styled-components";

export const BoxBody = styled.a`
  /* position: relative; */
  display: grid;
  grid-template-rows: repeat(3, 2fr);
  grid-auto-flow: row dense;
  grid-gap: 1rem;
  width: 20rem;

  height: 500px;
  /* border-radius: 14px; */
  border: 1px solid black;
  padding: 1rem 1rem 3rem;
  text-decoration: none;
  color: black;
  background-color: var(--color-snow);
  text-align: center;

  &:hover{
    background-color: var(--color-turquoise-blue);
  }
`;

export const Name = styled.a`
  font-size: 1.9rem;
  font-weight: 300;
`;

export const Price = styled.a`
  font-size: ${(props) => (props.onSale ? "1.5rem" : "2.5rem")};
  font-weight: ${(props) => (props.onSale ? "300" : "500")};
  text-decoration: ${(props) => (props.onSale ? "line-through" : "none")};
`;

export const NewPrice = styled.a`
  font-size: 2.5rem;
  font-weight: 600;
`;

export const ProductImg = styled.img`
  /* width: 100%; */
  min-height: 340px;
  max-width: 300px;

  @media (max-width: 768px) {
    min-height: 300px;
    max-width: 250px;
    margin: auto;
  }
`;
