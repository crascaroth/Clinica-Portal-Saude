import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainPage from "../Pages/MainPage/MainPage";
import LoginPage from "../Pages/LoginPage/LoginPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/2"></Route>
      </Switch>
    </BrowserRouter>
  );
}
