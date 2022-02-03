import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  input {
    width: 30rem;
  }

  @media (max-width: 500px) {
    padding: 1rem;
    margin: 1rem;
  }
`;

export const Input = styled.div`
  margin: 1rem;
  @media (max-width: 500px) {
    width: 80vw;
  }
`;

export const Img = styled.img`
  max-width: 30rem;
  max-height: 500px;
`;

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
`;
