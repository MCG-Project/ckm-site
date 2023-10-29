import React from "react";
import { ContactForm } from "../components/Contact/ContactForm";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import Image from "next/image";
import ContactHeroImage from "../public/Images/ContactHeroImage.jpg";
import { Container } from "react-bootstrap";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[2].tab}
        description={MetaTagSEOData[2].description}
        keywords={MetaTagSEOData[2].keywords}
        socialTitle={MetaTagSEOData[2].socialTitle}
        socialDescription={MetaTagSEOData[2].socialDescription}
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
