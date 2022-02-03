import styled from "styled-components";

export const Form = styled.div`
  /* margin-top: 10rem; */
  display: grid;
  place-content: center;
  text-align: center;
  align-items: center;

  input {
    width: 20rem;
  }
`;

export const FormItem = styled.div`
  margin: 1rem;
`;

export const FormItemPassword = styled.div`
  width: 200px;
`;

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
`;

export const Erro = styled.a`
  color: red;
  font-weight: 500;
`