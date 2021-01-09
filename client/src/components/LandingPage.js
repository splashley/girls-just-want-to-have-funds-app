import React from "react";
import MainButton from "../components/buttons/mainButton";
import styled from "styled-components/macro";
import LogoImg from "../components/logo";
import AvatarImg from "../assets/avatar.png";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();

  return (
    <Landing>
      <LogoImg />
      <AvatarSideImg src={AvatarImg} />
      <MainButton
        onClick={() => {
          history.push("/page2");
        }}
      >
        LET'S START !
      </MainButton>
    </Landing>
  );
};

const Landing = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const AvatarSideImg = styled.img`
  padding: 5px 5px 25px 5px;
  height: 400px;
`;
export default LandingPage;
