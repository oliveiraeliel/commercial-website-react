import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .body {
    display: inherit;
    flex-direction: inherit;
    justify-content: inherit;
    align-items: inherit;
    width: 40%;
    height: fit-content;
  }
`;

export const Header = styled(Body)`
  width: 100%;
  height: 5rem;
  border-radius: 10px;
  background-color: ${(props) =>
    props.positive ? `var(--color-lapis-lazuli)` : "red"};
  color: white;
  font-size: 2rem;
  position: relative;
`;

export const Text = styled(Body)`
  width: 100%;
  min-height: 100px;
  border-radius: 10px;
  background-color: var(--color-turquoise-blue);
  margin-top: 2px;
  font-size: 1.3rem;
  position: relative;
`;
