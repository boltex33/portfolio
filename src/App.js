import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Info />
      <Details />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
