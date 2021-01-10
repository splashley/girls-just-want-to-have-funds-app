import React from "react";
import MainButton from "../components/buttons/mainButton";
import styled from "styled-components/macro";
import LogoImg from "../components/logo";
import AvatarImg from "../assets/avatar.png";
import { useHistory } from "react-router-dom";
import { UserInfoContext } from "../UserInfoContext";
import SubHeader from "./SubHeader";

const FourOhFour = () => {
  const history = useHistory();
  const { hasAccount, avatarUrl } = React.useContext(UserInfoContext);
  return (
    <Landing>
      <LogoImg />
      <SubHeader>404-PAGE NOT FOUND</SubHeader>
      <Spacing></Spacing>
      <MainButton
        style={{ marginTop: "200px" }}
        onClick={() => {
          history.push("/");
        }}
      >
        RETURN HOME
      </MainButton>
    </Landing>
  );
};

export default FourOhFour;

const Landing = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Spacing = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;
