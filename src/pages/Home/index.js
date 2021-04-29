import React, { useEffect, useState } from "react";

import {
  Arrived,
  AsideMenu,
  Browse,
  Clients,
  Footer,
  Header,
  Hero,
} from "../../components";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      "https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc",
      {
        headers: {
          "Content-type": "application/json",
          accept: "application/json",
          "x-api-key": process.env.REACT_APP_APIKEY,
        },
      }
    );
    const { nodes } = await response.json();
    setItems(nodes);

    const script = document.createElement("script");
    script.src = "/carousel.js";
    script.async = false;
    document.body.appendChild(script);
  };

  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
};

export default Home;
