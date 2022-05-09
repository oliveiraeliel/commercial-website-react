import styled from "styled-components";

export const Body = styled.section`
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  h1 {
    margin: 0;
  }
  .contactus {
    font-size: 2rem;
  }

  @media (max-width: 750px) {
    flex-direction: column;
  }
  margin: 1rem;
`;

export const EmailBox = styled.div`
  width: 60vw;
  height: 40vh;
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 750px) {
    width: 90vw;
  }
  .header {
    display: flex;
    flex-direction: row;
    width: 95%;
  }
  .input {
    font-size: 15pt;
    font-weight: 400;
    flex: 1;
    width: 95%;
    margin: 5px;
    border: none;
    text-decoration: none;
    outline: none;
    background-color: white;
  }

  .placeholder {
    background-color: red;
  }
`;
