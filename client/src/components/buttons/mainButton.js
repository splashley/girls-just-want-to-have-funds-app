import React from "react";
import styled from "styled-components";

const MainButton = ({ children, onClick }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

const Wrapper = styled.button`
  background: #6ced8c;
  width: 230px;
  font-size: 25px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 13px 0px;
  letter-spacing: 2px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 300ms;

  :hover {
    transform: scale(1.1);
  }
`;

export default MainButton;
