import React from "react";
import Hero from "./componets/hero-section/heroSection";
import Menu from "./componets/menu-section/menuSection";
import Video from "./componets/video-section/videoSection";
import FreshBeansBanner from "./componets/banners/fresh-beans/freshBeansBanner";
import GreatCoffeBanner from "./componets/banners/great-coffe/greatCoffeBanner";
import Description from "./componets/description-section/descriptionSection";
import GalleryBanner from "./componets/banners/gallery/galleryBanner";
import BlogPreviewSection from "./componets/blog-preview-section/blogPreviewSection";
import ContactSection from "./componets/contact-section/contactSection";

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
      <BlogPreviewSection />
      <ContactSection />
    </main>
  );
}

export default App;
