import React from "react";
import { ContactForm } from "../components/Contact/ContactForm";
import Head from "next/head";
import Image from "next/image";
import ContactHeroImage from "../public/Images/ContactHeroImage.jpg";
import { Container } from "react-bootstrap";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>CK&M | Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <Container
        className="d-flex align-items-center flex-column"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        <h1 className="mt-3 fw-bold">Contact Us</h1>
        <h3 className="mb-3 fw-bold">
          (706)-814-4848 | Christian.Krausnick@gmail.com
        </h3>
        <ContactForm />
      </Container>
    </>
  );
}
