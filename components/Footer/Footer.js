import React from "react";
import Image from "next/image";
import useDeviceDetect from "../../utils/useDeviceDetect";
import LogoWhiteSmokeBG from "../../public/Images/LogoWhiteSmokeBG.png";
import { Container } from "react-bootstrap";
import styles from "../../styles/Footer.module.css";

export function Footer() {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      {isMobile ? (
        <div id={styles.MobileFooterContainer}>
          <Container>
            <hr style={{ marginTop: "0" }} />
          </Container>

          <Container className="d-flex justify-content-between mb-2">
            <Image
              alt="ckm logo"
              src={LogoWhiteSmokeBG}
              id={styles.mobileFooterLogo}
              className="align-self-start"
            />
            <p className="m-1 align-self-center">
              <strong>©2023 CK&M Property Services</strong>
            </p>
          </Container>
        </div>
      ) : (
        // Browser
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          id={styles.footerContainer}
        >
          <Container>
            <hr />
          </Container>
          <Container className="d-flex flex-row hstack gap-3">
            <Image
              alt="ckm logo"
              src={LogoWhiteSmokeBG}
              id={styles.footerLogo}
              className="align-self-start"
            />
            <p className="m-1 align-self-center">
              <strong>©2023 CK&M Property Services</strong>
            </p>
          </Container>
        </div>
      )}
    </>
  );
}
