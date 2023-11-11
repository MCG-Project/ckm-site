import React from "react";
import Image from "next/image";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { serviceData } from "./ServicesData";
import PropertySalesImage from "../../public/Images/PropertySalesImage.jpg";
import { Button, Container, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Services.module.css";

export function ServicesMain() {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      {isMobile ? (
        <div className="d-flex align-items-center flex-column position-relative pb-5">
          <Image
            src={PropertySalesImage}
            className={styles.mobileCardBoxOverlay}
            alt={serviceData[0].altImage}
          />
          <Container>
            <h1 className="mt-3 fw-bold text-center">{serviceData[0].title}</h1>
            <p className=" mt-4 fs-5">{serviceData[0].mainContent}</p>
          </Container>

          <ListGroup className="w-75 mt-2">
            {serviceData[0].listContent.map((item) => (
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faCheck} className={styles.mobileIcon} />
                <ListGroup.Item className={styles.mobileListItem}>
                  <strong> {item.title}</strong>
                  {item.content}
                </ListGroup.Item>
              </div>
            ))}
          </ListGroup>
          <p className="w-75 mt-4 text-center fs-5">
            {serviceData[0].secondaryContent}
          </p>
          <Button href="/contact" className="fw-bold" variant="dark">
            Contact Us
          </Button>
        </div>
      ) : (
        // Browser
        <div className="d-flex align-items-center flex-column position-relative">
          <Image
            src={PropertySalesImage}
            className={styles.cardBoxOverlay}
            alt={serviceData.altImage}
            style={{
              width: "100%",
              height: "50vh",
              objectFit: "cover",
            }}
          />

          <h1
            className="mt-3 fw-bold"
            style={{
              color: "#444654",
            }}
          >
            {serviceData[0].title}
          </h1>
          <p className="w-75 mt-4 text-center fs-5">
            {serviceData[0].mainContent}
          </p>
          <ListGroup className="w-50 mt-2">
            {serviceData[0].listContent.map((item) => (
              <div className="d-flex flex-row m-auto">
                <FontAwesomeIcon icon={faCheck} className={styles.icon} />
                <ListGroup.Item className={styles.listItem}>
                  <strong> {item.title}</strong>
                  {item.content}
                </ListGroup.Item>
              </div>
            ))}
          </ListGroup>
          <p className="w-50 mt-4 text-center fs-5">
            {serviceData[0].secondaryContent}
          </p>
          <Button href="/contact" className="fw-bold" variant="dark">
            Contact Us
          </Button>
        </div>
      )}
    </>
  );
}
