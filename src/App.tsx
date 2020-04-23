import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppPage } from "./pages/AppPage";
import { TextPage } from "./pages/TextPage";
import { AppListPage } from "./pages/AppListPage";
import { LandingPage } from "./pages/LandingPage";
import { CSSReset } from "@chakra-ui/core";

function App() {
  return (
    <div>
      <CSSReset />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/apper">
            <AppListPage />
          </Route>
          <Route exact path="/apper/:appId">
            <AppPage />
          </Route>
          <Route exact path="/apper/:appId/:textKey">
            <TextPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
