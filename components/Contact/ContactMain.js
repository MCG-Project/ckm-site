import React from "react";
import Image from "next/image";
import useDeviceDetect from "../../utils/useDeviceDetect";
import ContactHeroImage from "../../public/Images/ContactHeroImage.jpg";
import { Container } from "react-bootstrap";
import styles from "../../styles/Contact.module.css";

export function ContactMain() {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      {isMobile ? (
        <>
          <Image
            src={ContactHeroImage}
            className={styles.cardBoxOverlay}
            alt=""
            style={{
              width: "100%",
              height: "30vh",
              objectFit: "cover",
            }}
          />
          <Container className="d-flex flex-column">
            <h1 className="mt-3 fw-bold text-center">Contact Us</h1>
            <p className="mb-3 fw-bold text-center">
              (706)-814-4848 | ckmpropserv@outlook.com
            </p>
          </Container>
        </>
      ) : (
        // Browser
        <>
          <Image
            src={ContactHeroImage}
            className={styles.cardBoxOverlay}
            alt=""
            style={{
              width: "100%",
              height: "50vh",
              objectFit: "cover",
            }}
          />
          <Container className="d-flex align-items-center flex-column">
            <h1 className="mt-3 fw-bold">Contact Us</h1>
            <h3 className="mb-3 fw-bold">
              (706)-814-4848 | Christian.Krausnick@gmail.com
            </h3>
          </Container>
        </>
      )}
    </>
  );
}
