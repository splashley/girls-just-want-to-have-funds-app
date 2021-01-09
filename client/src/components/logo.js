import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/logo.png";

const Logo = styled.img`
  padding: 5px;
  max-width: 150px;
`;

const Logo = () => {
  return <Logo src={LogoImg} />;
};

export default Logo;
