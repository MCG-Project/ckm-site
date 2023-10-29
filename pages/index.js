import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { HomeMain } from "../components/Home/HomeMain";
import { HomeVideo } from "../components/Home/HomeVideo";
import { HomeCard } from "../components/Home/HomeCard";
import { HomeAbout } from "../components/Home/HomeAbout";
import Image from "next/image";
import HomeHeroImage from "../public/Images/HomeHeroImage.jpg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <MetaTag
        tab="Home"
        description="XXX"
        keywords="XXX"
        socialTitle="XXX"
        socialDescription="XXX"
        socialImage={HomeHeroImage}
      />
      <div className="d-flex align-items-center flex-column position-relative">
        <Image
          src={HomeHeroImage}
          className={styles.cardBoxOverlay}
          alt="Porch Image by Gretta Blankenship at Pixabay"
          style={{
            width: "100%",
            height: "50vh",
            objectFit: "cover",
          }}
        />
        <h1
          className="mt-3 fw-bold"
          style={{
            color: "#272514",
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          CK&M
        </h1>
        <h3
          className="mb-3 fw-bold"
          style={{
            color: "#272514",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          Property Services
        </h3>
      </div>
      <HomeMain />
      <HomeVideo />
      <HomeCard />
      <HomeAbout />
    </>
  );
}
