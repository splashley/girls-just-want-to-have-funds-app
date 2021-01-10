import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { UserInfoContext } from "./UserInfoContext";
import GlobalStyles from "./GlobalStyles";
import AvatarProvider from "./components/AvatarContext";
import MainButton from "./components/buttons/mainButton";
import styled from "styled-components/macro";
import LogoImg from "./components/logo";
import AvatarImg from "./assets/avatar.png";
import NameInputPage from "./components/NameInputPage";
import LearnAboutMoneyPage from "./components/LearnAboutMoney";
import SettingGoalPage from "./components/settingGoalPage";
import AboutGoal from "./components/AboutGoal";
import { useHistory } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SavingStatusPage from "./components/savingStatus";

function App() {
  const { test } = React.useContext(UserInfoContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/nameinput">
          <NameInputPage />
        </Route>
        <Route path="/avatar">
          <AvatarProvider />
        </Route>
        <Route path="/learnaboutmoney">
          <LearnAboutMoneyPage />
        </Route>
        <Route path="/settinggoalpage">
          <SettingGoalPage />
        </Route>
        <Route path="/aboutgoal">
          <AboutGoal />
        </Route>
        <Route path="/savingstatus">
          <SavingStatusPage />
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
