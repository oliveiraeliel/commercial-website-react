import styled from "styled-components";

export const Btn = styled.button`
  height: ${(props) => `${props.btnHeight}`};
  width: ${(props) => `${props.btnWidth}`};
  background-color: ${(props) => `var(${props.btnColor})`};
  color: ${(props) => `var(${props.txtColor})`};
  font-size: ${(props) => `${props.txtSize}`};
  text-align: center;
  border: none;
  border-radius: 5px;
`;
