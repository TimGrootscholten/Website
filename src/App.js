import React from "react";
import GlobalStyle from "./style/GlobalStyle";
//import page
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyWork from "./pages/MyWork";
import WorkDetail from "./pages/WorkDetail";
//router
import { Switch, Route, useLocation } from "react-router-dom";
//animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <About />
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
      </AnimatePresence>
    </div>
  );
}

export default App;
