import React from "react";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import styles from "../../styles/MoreInfo.module.css";

export function MoreInfoMain() {
  return (
    <>
      <Container className="d-flex align-items-center flex-column">
        <h1 className="mt-3 mb-3 fw-bold">Thank You!</h1>
        <p className="mt-2">
          If you would like to tell us more about your property, please fill out
          the form below, if not, we will contact you!
        </p>
        <a className={styles.iconHome} href="/">
          <FontAwesomeIcon icon={faBackward} className={styles.icon} /> Home
        </a>
      </Container>
    </>
  );
}
