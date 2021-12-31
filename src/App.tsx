import React from "react";
import Hero from "./componets/hero-section/heroSection";
import Menu from "./componets/menu-section/menuSection";
import Video from "./componets/video-section/videoSection";
import FreshBeansBanner from "./componets/banners/fresh-beans/freshBeansBanner";
import GreatCoffeBanner from "./componets/banners/great-coffe/greatCoffeBanner";

function App() {
  return (
    <main className="App ">
      <Hero />
      <Menu />
      <Video />
      <FreshBeansBanner />
      <GreatCoffeBanner />
    </main>
  );
}

export default App;
