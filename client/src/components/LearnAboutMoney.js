import React from "react";
import styled from "styled-components/macro";
import MainButton from "./buttons/mainButton";
import Logo from "./logo";
import SubHeader from "./SubHeader";
import { UserInfoContext } from "../UserInfoContext";
import { useHistory } from "react-router-dom";
import AvatarImg from "../assets/avatar.png";
import ButtonWrapper from "./buttonWrapper";

const LearnAboutMoneyPage = () => {
  const { userName, setUserName } = React.useContext(UserInfoContext);
  const history = useHistory();
  return (
    <Wrapper>
      <Logo />
      <SubHeader>LET'S LEARN ABOUT MONEY {userName.toUpperCase()} !</SubHeader>
      <GridWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <strong>Savings:</strong> Let's say your parents give you a 10
            dollar allowance every week for doing the chores around the house.
            Those 10 dollars are what we call your <strong>income</strong>. Now,
            you've had your eye on the new Feline Festival game and you've been
            putting aside your allowance for it. That money you've put aside is
            your <strong>savings</strong>.
          </Paragraph>
        </ParagraphWrapper>
        <AvatarSection>
          <AvatarSideImg src={AvatarImg} />

          <Bubble>
            <Tip />
            My <strong>income</strong> is 15 bucks a week. I have been saving
            for two weeks so I have 30 dollars in <strong>savings</strong> YAAY
            !
          </Bubble>
        </AvatarSection>
      </GridWrapper>
      <ButtonWrapper nextLink="/aboutgoal" />
    </Wrapper>
  );
};

export default LearnAboutMoneyPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px;
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 70px;
  vertical-align: baseline;
`;

const ParagraphWrapper = styled.div`
  margin-top: 30px;
  padding: 0 400px;
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
`;

const AvatarSection = styled.div`
  position: relative;
  text-align: center;
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
  max-width: 280px;
  position: absolute;
  top: 30%;
  left: 850px;
  z-index: 1;
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
