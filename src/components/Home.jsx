import React from "react";
import FullScreenSection from "./FullScreenSection";
import ServicesSection from "./ServicesSection";
import GallerySection from "./GallerySection";

function Home() {
  return (
    <div className="container mt-5">
      <FullScreenSection />
      <ServicesSection />
      <GallerySection />
    </div>
  );
}

export default Home;
