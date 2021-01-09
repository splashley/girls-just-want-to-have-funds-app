import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { UserInfoContext } from "./UserInfoContext";
import GlobalStyles from "./GlobalStyles";

function App() {
  const { test } = React.useContext(UserInfoContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>Page 1, {test}</div>
        </Route>
        <Route path="/page2">
          <div>page 2</div>
        </Route>
      </Switch>
      <GlobalStyles />
    </Router>
  );
}

export default App;
