import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import { StepCard } from "../components/WhatWeDo/StepCard";
import Image from "next/image";
import LogoWhiteSmokeBG from "../public/Images/LogoWhiteSmokeBG.png";
import { Container, Button } from "react-bootstrap";
import { secondaryContent } from "../components/WhatWeDo/WhatWeDoData";
import styles from "../styles/WhatWeDo.module.css";

export default function WhatWeDo() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[5].tab}
        description={MetaTagSEOData[5].description}
        keywords={MetaTagSEOData[5].keywords}
        socialTitle={MetaTagSEOData[5].socialTitle}
        socialDescription={MetaTagSEOData[5].socialDescription}
        socialImage={LogoWhiteSmokeBG}
      />
      <Container className="d-flex align-items-center flex-column">
        <Image
          alt="Logo"
          src={LogoWhiteSmokeBG}
          className={styles.logo}
        ></Image>
        <StepCard />
        <Button href="/contact" className="fw-bold" variant="dark">
          Contact Us
        </Button>
        <p className="w-75 fs-5 mt-5">{secondaryContent}</p>
      </Container>
      <Container className="d-flex row w-75 m-auto mt-3"></Container>
    </>
  );
}
