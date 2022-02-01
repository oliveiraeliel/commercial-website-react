import styled from "styled-components";

export const Welcome = styled.a`
  font-size: 8rem;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 100vh;

  h1 {
    color: white;
    font-size: 6rem;
    font-weight: 200;
    margin: 0;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 3.3rem;
    }
  }
`;

export const Item = styled.div`
  margin: 1rem;
  @media (max-width: 768px) {
      margin: 0;
    }
`;

export const Container = styled.a`
  color: var(--color-tyrian-purple);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* flex-direction: row; */

  span {
    font-size: 4rem;
    font-weight: 100;

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }
  @media (max-width: 1050px) {
    display: block;
    grid-template-columns: none;
  }
`;

export const WelcomeText = styled.div`
  margin: 15rem 4rem;
  display: flex;
  flex-direction: column;

  text-align: center;
  @media (max-width: 1050px) {
    margin: 10rem 0;
  }
`;

export const SideImage = styled.img`
  margin: 0 10rem;
  height: 43rem;

  @media (max-width: 1050px) {
    display: none;
  }
`;
