import React from "react";
import styled from "styled-components";
import MainButton from "./buttons/mainButton";
import Logo from "./logo";
import SubHeader from "./SubHeader";
import ButtonWrapper from "./buttonWrapper";
import { UserInfoContext } from "../UserInfoContext";
import { useHistory } from "react-router-dom";

const AboutGoal = () => {
  const {
    allowance,
    amountToSave,
    goal,
    setHasAccount,
    avatarUrl,
  } = React.useContext(UserInfoContext);
  const history = useHistory();
  React.useEffect(() => {
    setHasAccount(true);
  }, []);
  return (
    <Wrapper>
      <Logo />
      <SubHeader>ABOUT YOUR GOAL</SubHeader>
      {/* <Paragraph>
        Since you are saving {allowance} dollars every week, it will take you{" "}
        <b>{Math.ceil(amountToSave / allowance)} weeks </b> to reach your goal
        of {goal}.
      </Paragraph> */}
      <AvatarSection>
        <AvatarSideImg src={avatarUrl} />
        <Bubble>
          <Tip />
          Since I'm saving {allowance} dollars every week, it will take me{" "}
          <b>{Math.ceil(amountToSave / allowance)} weeks </b> to reach my goal
          of {goal}.
        </Bubble>
      </AvatarSection>

      <ButtonWrapper nextLink="/savingstatus" />
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

const AvatarSection = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`;

const AvatarSideImg = styled.img`
  padding: 5px 5px 25px 5px;
  height: 400px;
  margin-left: -280px;
`;

const Bubble = styled.div`
  border-radius: 9px;
  background: white;
  font-size: 20px;
  padding: 15px;
  position: absolute;
  top: 34%;
  left: 93px;
  z-index: 1;
  width: 300px;
`;

const Tip = styled.div`
  background: white;
  height: 40px;
  width: 40px;
  transform: rotate(45deg);
  z-index: -1;
  position: absolute;
  top: 50%;
  left: -18px;
`;
