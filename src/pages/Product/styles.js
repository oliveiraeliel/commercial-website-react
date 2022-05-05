import styled from "styled-components";

export const SaleBoxBody = styled.section`
  display: flex;
  flex-direction: row;
  height: 100vh;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const ImgBox = styled.div`
  flex: 1;
  text-align: center;
`;

export const Img = styled.img`
  width: 50rem;
  max-height: 100vh;

  @media (max-width: 950px) {
    width: 20rem;
  }
`;

export const Info = styled.a`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Price = styled.a`
  font-size: ${(props) => (props.onSale ? "1.5rem" : "2.5rem")};
  font-weight: ${(props) => (props.onSale ? "300" : "500")};
  text-decoration: ${(props) => (props.onSale ? "line-through" : "none")};
`;

export const OnSalePrice = styled.a`
  font-size: 3rem;
  font-weight: 500;
`;


