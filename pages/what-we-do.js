import React from "react";
import { StepCard } from "../components/WhatWeDo/StepCard";
import Head from "next/head";
import Image from "next/image";
import LogoWhiteSmokeBG from "../public/Images/LogoWhiteSmokeBG.png";
import { Container, Button } from "react-bootstrap";
import { secondaryContent } from "../components/WhatWeDo/WhatWeDoData";
import styles from "../styles/WhatWeDo.module.css";

export default function WhatWeDo() {
  return (
    <>
      <Head>
        <title>CK&M | What We Do</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
