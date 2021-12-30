import React from "react";
import Hero from "./componets/hero-section/heroSection";
import Menu from "./componets/menu-section/menuSection";
import Video from "./componets/video-section/videoSection";
import FreshBeansBanner from "./componets/banners/fresh-beans/freshBeansBanner";

function App() {
  return (
    <main className="App ">
      <Hero />
      <Menu />
      <Video />
      <FreshBeansBanner />
    </main>
  );
}

export default App;
