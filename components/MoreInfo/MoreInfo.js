import React, { useEffect } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { MoreInfoForm } from "./MoreInfoForm";
import { MetaTag } from "../MetaTag/MetaTag";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
// import "../Styles/Styles.css";

export function MoreInfo() {
  return (
    <>
      <MetaTag
        title="CK&M | More Info"
        metaContent="This is a website"
        image=""
      />

      <NavBar />
      <div id="container">
        <Container className="d-flex align-items-center flex-column">
          <h1 className="mt-3 mb-3 fw-bold">Thank You!</h1>
          <p className="mt-2">
            If you would like to tell us more about your property, please fill
            out the form below, if not, we will contact you!{" "}
          </p>
          <a
            className="mb-5 decoration-none fw-bold"
            href="/"
            style={{ color: "#27326a", textDecoration: "none" }}
          >
            <FontAwesomeIcon
              size="1x"
              icon={faBackward}
              className="mt-2"
              style={{ color: "#1c2850" }}
            />{" "}
            Home
          </a>
          <MoreInfoForm />
        </Container>
      </div>

      <Footer />
    </>
  );
}
