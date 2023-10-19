import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { StepCard } from "./StepCard";
import { MetaTag } from "../MetaTag/MetaTag";
import IMAGE from "../../../public/Images/Logo-WhiteSmokeBG.png";
// import "../Styles/Styles.css";
import { Container, Image } from "react-bootstrap";
import { secondaryContent } from "./WhatWeDoData";

export function WhatWeDo() {
  return (
    <>
      <MetaTag
        title="CK&M | What We Do"
        metaContent="This is a website"
        image=""
      />
      <NavBar />
      <div id="container">
        <Container className="d-flex align-items-center flex-column">
          <Image alt="Logo" src={IMAGE} style={{ height: "15rem" }}></Image>
          <StepCard />
          <p className="w-75 fs-5 mt-5">{secondaryContent}</p>
        </Container>
        <Container className="d-flex row w-75 m-auto mt-3"></Container>
      </div>
      <Footer />
    </>
  );
}
