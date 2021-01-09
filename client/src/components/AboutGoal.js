import React from "react";
import styled from "styled-components";
import MainButton from "./buttons/mainButton";
import Logo from "./logo";
import SubHeader from "./SubHeader";
import ButtonWrapper from "./buttonWrapper";
import { UserInfoContext } from "../UserInfoContext";
import { useHistory } from "react-router-dom";

const AboutGoal = () => {
  const { allowance, amountToSave, goal } = React.useContext(UserInfoContext);
  const history = useHistory();
  return (
    <Wrapper>
      <Logo />
      <SubHeader>ABOUT YOUR GOAL</SubHeader>
      <Paragraph>
        Since you are saving {allowance} dollars every week, it will take you{" "}
        <b>{Math.ceil(amountToSave / allowance)} weeks </b> to reach your goal
        of {goal}.
      </Paragraph>
      <ButtonWrapper />
    </Wrapper>
  );
};

export default AboutGoal;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px;
`;

const Paragraph = styled.p`
  font-size: 25px;
  line-height: 2;
  text-align: center;
  max-width: 500px;
  margin-top: 30px;
  margin-bottom: 40px;
`;
