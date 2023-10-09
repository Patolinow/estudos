import styled from "styled-components";

const Button = styled.button`
  color: white;
  font-size: 16px;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 600;

  padding: 8px 12px;
  background-color: #E81123;
  border-radius: 4px;
  border: none;

  cursor: pointer;
  transition: 200ms;

  &:hover {
    filter: brightness(130%);
  }
`

export default Button