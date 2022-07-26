import styled, { css } from "styled-components";

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 1px solid gray;
margin-top: 20px;
font-weight: bold;
cursor : pointer;
padding: 10px;
padding-left: 20px;
padding-right: 20px;

${props => props.primary && css`
  background: blue;
  color: white;
  letter-spacing: 2px;
`}
${props => props.dashed && css`
  border: 1px dashed gray;
`}
${props => props.text && css`
  border: none;
`}
${props => props.link && css`
  border: none;
  color: blue;
`}
`;

export default Button;