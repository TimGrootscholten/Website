import React from "react";
import GlobalStyle from "./style/GlobalStyle";
//import page
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import MyWork from "./pages/MyWork";
import WorkDetail from "./pages/WorkDetail";
//router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <MyWork />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/work/:id">
          <WorkDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
