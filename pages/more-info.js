import React, { useEffect, useState } from "react";
import { MoreInfoForm } from "../components/MoreInfo/MoreInfoForm";
import Head from "next/head";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import styles from "../styles/MoreInfo.module.css";

export default function MoreInfo() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  useEffect(() => {
    // This code runs on the client side
    const userInput = JSON.parse(sessionStorage.getItem("userInput"));

    if (userInput) {
      setUserName(userInput[0].userName);
      setUserEmail(userInput[0].userEmail);
      setUserPhone(userInput[0].userPhone);
      setContactNumber(userInput[0].contactNumber);
    }

    console.log(userInput[0].userName);
  }, []);
  return (
    <>
      <Head>
        <title>CK&M | More Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="d-flex align-items-center flex-column">
        <h1 className="mt-3 mb-3 fw-bold">Thank You!</h1>
        <p className="mt-2">
          If you would like to tell us more about your property, please fill out
          the form below, if not, we will contact you!{" "}
        </p>
        <a className={styles.iconHome} href="/">
          <FontAwesomeIcon icon={faBackward} className={styles.icon} /> Home
        </a>
        <MoreInfoForm
          userName={userName}
          userEmail={userEmail}
          userPhone={userPhone}
          contactNumber={contactNumber}
        />
      </Container>
    </>
  );
}
