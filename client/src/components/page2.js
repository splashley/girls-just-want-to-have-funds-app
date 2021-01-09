import React from "react";
import styled from "styled-components";
import MainButton from "./buttons/mainButton";
import Logo from "./logo";
import SubHeader from "./SubHeader";
import UserInfoContext from "../UserInfoContext";

const Page2 = () => {
  return (
    <Wrapper>
      <Logo />
      <SubHeader>WHAT IS YOUR NAME ?</SubHeader>
      <Input></Input>
      <MainButton>NEXT</MainButton>
    </Wrapper>
  );
};

export default Page2;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px;
`;

const Input = styled.input`
  width: 365px;
  border: none;
  border-radius: 8px;
  height: 30px;
  margin-bottom: 45px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
