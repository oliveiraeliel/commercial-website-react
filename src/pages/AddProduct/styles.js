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
  height: 150vh;
  /* display: grid;
  place-content: center; */
`;

export const NumBox = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  input {
    width: 9rem;
  }
`;
