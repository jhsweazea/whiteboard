import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Container from "./components/container/Container";
import Dashboard from "./views/Dashboard";
import Account from "./views/Account";
import Contact from "./views/Contact";
import Login from "./Login/Login";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/canvas">
          <Container />
        </Route>
        <Route exact path="/account">
          <Account/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="register">
          <Signup/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
