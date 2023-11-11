import React from "react";
import Image from "next/image";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { StepCard } from "./StepCard";
import LogoWhiteSmokeBG from "../../public/Images/LogoWhiteSmokeBG.png";
import { Container, Button } from "react-bootstrap";
import { secondaryContent, disclaimer } from "./WhatWeDoData";
import styles from "../../styles/WhatWeDo.module.css";

export function WhatWeDo() {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      {isMobile ? (
        <div className="d-flex align-items-center flex-column">
          <Image
            alt="Logo"
            src={LogoWhiteSmokeBG}
            className={styles.mobileLogo}
          ></Image>
          <StepCard />
          <Button href="/contact" className="fw-bold" variant="dark">
            Contact Us
          </Button>

          <p className="w-75 fs-5 mt-5">{secondaryContent}</p>
          <p className="w-50 mt-3">{disclaimer}</p>
        </div>
      ) : (
        // Browser
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
          <p className="w-50 mt-3">{disclaimer}</p>
        </Container>
      )}
    </>
  );
}
