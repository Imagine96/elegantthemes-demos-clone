import React from "react";
import Hero from "./componets/hero-section/heroSection";
import Menu from "./componets/menu-section/menuSection";
import Video from "./componets/video-section/videoSection";
import FreshBeansBanner from "./componets/banners/fresh-beans/freshBeansBanner";
import GreatCoffeBanner from "./componets/banners/great-coffe/greatCoffeBanner";
import Description from "./componets/description-section/descriptionSection";
import GalleryBanner from "./componets/banners/gallery/galleryBanner";

function App() {
  return (
    <main className="App ">
      <Hero />
      <Menu />
      <Video />
      <FreshBeansBanner />
      <GreatCoffeBanner />
      <Description />
      <GalleryBanner />
    </main>
  );
}

export default App;
