import React from "react";
import { ContactForm } from "../components/Contact/ContactForm";
import { MetaTag } from "../components/MetaTag/MetaTag";
import Image from "next/image";
import ContactHeroImage from "../public/Images/ContactHeroImage.jpg";
import { Container } from "react-bootstrap";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <MetaTag
        tab="Contact Us"
        description="XXX"
        keywords="XXX"
        socialTitle="XXX"
        socialDescription="XXX"
        socialImage={ContactHeroImage}
      />
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
        <ContactForm />
      </Container>
    </>
  );
}
