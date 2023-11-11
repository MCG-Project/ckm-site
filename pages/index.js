import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import { HomeMain } from "../components/Home/HomeMain";
import { HomeBanner } from "../components/Home/HomeBanner";
import { HomeCard } from "../components/Home/HomeCard";
import { HomeAbout } from "../components/Home/HomeAbout";
import HomeHeroImage from "../public/Images/HomeHeroImage.jpg";
import { HomeHero } from "../components/Home/HomeHero";

export default function Home() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[3].tab}
        description={MetaTagSEOData[3].description}
        keywords={MetaTagSEOData[3].keywords}
        socialTitle={MetaTagSEOData[3].socialTitle}
        socialDescription={MetaTagSEOData[3].socialDescription}
        socialImage={HomeHeroImage}
      />
      <HomeHero />
      <HomeMain />
      <HomeBanner />
      <HomeCard />
      <HomeAbout />
    </>
  );
}
