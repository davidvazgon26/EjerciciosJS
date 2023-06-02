import React from "react";
import styled from "styled-components";
import { Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Articles } from "./pages/Articles";

//My style component
const BigGreenHeading = styled.h1`
  color: green;
  font-size: 46px;
`;

const App = () => {
  return (
    <>
      <BigGreenHeading>Server-Side Rendering Example</BigGreenHeading>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/articles">Articulo</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
      </Switch>
    </>
  );
};

export default App;
