import React from "react";
import styled from "styled-components";
import MainButton from "./buttons/mainButton";
import Logo from "./logo";
import SubHeader from "./SubHeader";
import { UserInfoContext } from "../UserInfoContext";
import { useHistory } from "react-router-dom";

const SettingGoalPage = () => {
  const { userName, setUserName } = React.useContext(UserInfoContext);
  const history = useHistory();
  return (
    <Wrapper>
      <Logo />
      <SubHeader>SET A SAVINGS GOAL</SubHeader>
      <Questions>HOW MUCH CAN YOU SAVE EVERY WEEK?</Questions>
      <Input></Input>
      <Questions>HOW MUCH DO YOU WANT TO SAVE?</Questions>
      <Input></Input>
      <Questions>WHAT ARE YOU SAVING FOR?</Questions>
      <Input></Input>
      <MainButton
        onClick={() => {
          history.push("/??");
        }}
      >
        BACK
      </MainButton>
      <MainButton
        onClick={() => {
          history.push("/??");
        }}
      >
        NEXT
      </MainButton>
    </Wrapper>
  );
};

export default SettingGoalPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px;
`;

const Input = styled.input`
  width: 300px;
  border: none;
  border-radius: 8px;
  height: 30px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Questions = styled.div`
  padding: 5px;
  font-weight: 600;
`;
