import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { UserInfoContext } from "./UserInfoContext";
import GlobalStyles from "./GlobalStyles";
import AvatarProvider from "./components/AvatarContext";
import MainButton from "./components/buttons/mainButton";
import styled from "styled-components/macro";
import LogoImg from "./components/logo";
import AvatarImg from "./assets/avatar.png";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import SettingGoalPage from "./components/settingGoalPage";
import AboutGoal from "./components/AboutGoal";

function App() {
  const { test } = React.useContext(UserInfoContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing>
            <LogoImg />
            <AvatarSideImg src={AvatarImg} />
            <MainButton>LET'S START !</MainButton>
          </Landing>
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
        <Route path="/page3">
          <Page3 />
        </Route>
        <Route path="/settinggoalpage">
          <SettingGoalPage />
        </Route>
        <Route path="/aboutGoal">
          <AboutGoal />
        </Route>
        <Route path="/avatar">
          <AvatarProvider />
        </Route>
      </Switch>
      <GlobalStyles />
    </Router>
  );
}

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

export default App;
