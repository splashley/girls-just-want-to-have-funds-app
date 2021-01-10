import React from "react";
import MainButton from "../components/buttons/mainButton";
import styled from "styled-components/macro";
import LogoImg from "../components/logo";
import AvatarImg from "../assets/avatar.png";
import { useHistory } from "react-router-dom";
import { UserInfoContext } from "../UserInfoContext";

const LandingPage = () => {
  const history = useHistory();
  const { hasAccount, avatarUrl } = React.useContext(UserInfoContext);
  return (
    <Landing>
      <LogoImg />
      {hasAccount ? (
        <AvatarSideImg src={avatarUrl} />
      ) : (
        <AvatarSideImg src={AvatarImg} />
      )}
      {hasAccount ? (
        <MainButton
          onClick={() => {
            history.push("/savingstatus");
          }}
        >
          LET'S GO TO YOUR ACCOUNT
        </MainButton>
      ) : (
        <MainButton
          onClick={() => {
            history.push("/nameinput");
          }}
        >
          LET'S START !
        </MainButton>
      )}
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
