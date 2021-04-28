import React from "react";
import {
  Arrived,
  AsideMenu,
  Browse,
  Clients,
  Footer,
  Header,
  Hero,
} from "./components/molecules";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
