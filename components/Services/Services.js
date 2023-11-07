import React from "react";
import Image from "next/image";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { Button, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Services.module.css";

export function Services(props) {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      {isMobile ? (
        <div className="d-flex align-items-center flex-column position-relative pb-5">
          <Image
            src={props.image}
            className={styles.mobileCardBoxOverlay}
            alt={props.altImage}
          />

          <h1 className="mt-3 fw-bold">{props.title}</h1>
          <p className="w-75 mt-4 fs-5">{props.mainContent}</p>
          <ListGroup className="w-75 mt-2">
            {props.listContent.map((item) => (
              <div className="d-flex align-items-start">
                <FontAwesomeIcon
                  icon={props.icon}
                  className={styles.mobileIcon}
                />
                <ListGroup.Item className={styles.mobileListItem}>
                  <strong> {item.title}</strong>
                  {item.content}
                </ListGroup.Item>
              </div>
            ))}
          </ListGroup>
          <p className="w-75 mt-4 text-center fs-5">{props.secondaryContent}</p>
          <Button href="/contact" className="fw-bold" variant="dark">
            Contact Us
          </Button>
        </div>
      ) : (
        // Browser
        <div className="d-flex align-items-center flex-column position-relative">
          <Image
            src={props.image}
            className={styles.cardBoxOverlay}
            alt={props.altImage}
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
            {props.title}
          </h1>
          <p className="w-75 mt-4 text-center fs-5">{props.mainContent}</p>
          <ListGroup className="w-50 mt-2">
            {props.listContent.map((item) => (
              <div className="d-flex flex-row">
                <FontAwesomeIcon icon={props.icon} className={styles.icon} />
                <ListGroup.Item className={styles.listItem}>
                  <strong> {item.title}</strong>
                  {item.content}
                </ListGroup.Item>
              </div>
            ))}
          </ListGroup>
          <p className="w-75 mt-4 text-center fs-5">{props.secondaryContent}</p>
          <Button href="/contact" className="fw-bold" variant="dark">
            Contact Us
          </Button>
        </div>
      )}
    </>
  );
}
