import styled from "styled-components";

export const Board = styled.div`
  height: 40px;
  margin-top: 10px;

  input {
    outline: none;
    width: 20vw;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid var(--color-dark-purple);
    font-size: 25px;
  }
  span {
    background-color: var(--color-lapis-lazuli);
  }
`;
