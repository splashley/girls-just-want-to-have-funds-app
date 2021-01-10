import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/logo.png";

const LogoEl = styled.img`
  padding: 5px;
  max-width: 400px;
  @media (max-width: 768px) {
    padding: 5px;
    max-width: 250px;
  }
`;

const Logo = () => {
  return <LogoEl src={LogoImg} />;
};

export default Logo;
