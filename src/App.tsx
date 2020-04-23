import React from "react";
import { Route, Switch } from "react-router-dom";
import { AppPage } from "./pages/AppPage";
import { TextPage } from "./pages/TextPage";
import { AppListPage } from "./pages/AppListPage";
import { CSSReset } from "@chakra-ui/core";

function App() {
  return (
    <div>
      <CSSReset />
      <Switch>
        <Route exact path="/">
          <AppListPage />
        </Route>
        <Route exact path="/:appId">
          <AppPage />
        </Route>
        <Route exact path="/:appId/:textKey">
          <TextPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
