import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { UserInfoContext } from "./UserInfoContext";
import GlobalStyles from "./GlobalStyles";
import MainButton from "./components/buttons/mainButton";
import styled from "styled-components";
import Page2 from "./components/page2";

function App() {
  const { test } = React.useContext(UserInfoContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing>
            <MainButton>LET'S START !</MainButton>
          </Landing>
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
      <GlobalStyles />
    </Router>
  );
}

const Landing = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default App;
