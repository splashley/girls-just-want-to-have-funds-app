import React from "react";
import styled from "styled-components";
import MainButton from "./buttons/mainButton";
import Logo from "./logo";
import SubHeader from "./SubHeader";
import { UserInfoContext } from "../UserInfoContext";
import { useHistory } from "react-router-dom";
import AvatarImg from "../assets/avatar.png";
const Page3 = () => {
  const { userName, setUserName } = React.useContext(UserInfoContext);
  const history = useHistory();
  return (
    <Wrapper>
      <Logo />
      <SubHeader>LET'S LEARN ABOUT MONEY {userName.toUpperCase()} !</SubHeader>
      <GridWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <b>Savings:</b> Let's say your parents give you a 10 dollar
            allowance every week for doing the chores around the house. Those 10
            dollars are what we call your <b>income</b>. Now, you've had your
            eye on the new Feline Festival game and you've been putting aside
            your allowance for it. That money you've put aside is your savings.
          </Paragraph>
        </ParagraphWrapper>
        <AvatarSection>
          <AvatarSideImg src={AvatarImg} />

          <Bubble>
            <Tip />
            My <b>income</b> is 15 bucks a week. I have been saving for two
            weeks so I have 30 dollars in <b>savings</b> YAAY !
          </Bubble>
        </AvatarSection>
      </GridWrapper>
    </Wrapper>
  );
};

export default Page3;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px;
`;

const GridWrapper = styled.div`
  grid-template-columns: 1fr 1fr;
  display: grid;
`;

const ParagraphWrapper = styled.div`
  padding-right: 60px;
  margin-top: 30px;
`;

const Paragraph = styled.p`
  font-size: 25px;
  line-height: 2;
  text-align: justify;
`;

const AvatarSection = styled.div`
  position: relative;
`;
const AvatarSideImg = styled.img`
  padding: 5px 5px 25px 5px;
  height: 400px;
`;

const Bubble = styled.div`
  border-radius: 9px;
  background: white;
  font-size: 25px;
  padding: 15px;
  max-width: 320px;
  position: absolute;
  top: 30%;
  left: 350px;
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
