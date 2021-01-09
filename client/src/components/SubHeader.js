import React from "react";
import styled from "styled-components";

const SubHeader = ({ children }) => {
  return <SubHeaderWrapper>{children}</SubHeaderWrapper>;
};

export default SubHeader;

const SubHeaderWrapper = styled.div`
  border-bottom: 20px solid white;
  font-size: 30px;
  height: 35px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  letter-spacing: 2px;
`;
