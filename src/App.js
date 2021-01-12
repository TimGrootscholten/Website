import React from "react";
import GlobalStyle from "./style/GlobalStyle";
//import page
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
