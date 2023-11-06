import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import { HomeMain } from "../components/Home/HomeMain";
import { HomeVideo } from "../components/Home/HomeVideo";
import { HomeCard } from "../components/Home/HomeCard";
import { HomeAbout } from "../components/Home/HomeAbout";
import HomeHeroImage from "../public/Images/HomeHeroImage.jpg";
import { HomeHero } from "../components/Home/HomeHero";

export default function Home() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[4].tab}
        description={MetaTagSEOData[4].description}
        keywords={MetaTagSEOData[4].keywords}
        socialTitle={MetaTagSEOData[4].socialTitle}
        socialDescription={MetaTagSEOData[4].socialDescription}
        socialImage={HomeHeroImage}
      />
      <HomeHero />
      <HomeMain />
      <HomeVideo />
      <HomeCard />
      <HomeAbout />
    </>
  );
}
