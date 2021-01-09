import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/logo.png";

const LogoWrapper = styled.img`
  padding: 5px;
  max-width: 300px;
`;

const Logo = () => {
  return <LogoWrapper src={LogoImg} />;
};

export default Logo;
