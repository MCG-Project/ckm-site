import React from "react";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { Card, CardGroup, Button } from "react-bootstrap";
import {
  faHouseChimneyCrack,
  faHouseCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Home.module.css";

export function HomeCard() {
  const { isMobile } = useDeviceDetect();

  const homeCardGroup = [
    {
      cardTitle: "Property Sales",
      cardImage: faHouseCircleCheck,
      cardText:
        "We offer quick and hassle-free property sales, ensuring you get cash in hand when you need it most.",
    },
    {
      cardTitle: "Foreclosures",
      cardImage: faHouseChimneyCrack,

      cardText:
        "We provide thorough due diligence, minimizing potential risks and ensuring you make informed decisions throughout the process",
    },
  ];

  return (
    <>
      {isMobile ? (
        <CardGroup className="d-flex flex-column pt-5">
          {homeCardGroup.map((item) => (
            <div className="d-flex justify-content-center">
              <Card
                style={{ width: "20rem", backgroundColor: "#95959c" }}
                className={styles.cardBoxGroup}
              >
                <FontAwesomeIcon
                  icon={item.cardImage}
                  className={styles.icon}
                  style={{ color: "#1c2850" }}
                />
                <Card.Body>
                  <Card.Title class="fs-4 text-center">
                    {item.cardTitle}
                  </Card.Title>
                  <Card.Text>{item.cardText}</Card.Text>
                  <Button
                    variant="link"
                    className="fw-bold text-white link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  >
                    Contact Us
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </CardGroup>
      ) : (
        // Browser
        <div className="d-flex p-5">
          <CardGroup className="d-flex justify-content-evenly w-100 row-cols-md-3">
            {homeCardGroup.map((item) => (
              <div className="d-flex justify-content-center col">
                <Card
                  style={{ width: "20rem", backgroundColor: "#95959c" }}
                  className={styles.cardBoxGroup}
                >
                  <FontAwesomeIcon
                    // size="3x"
                    icon={item.cardImage}
                    className={styles.icon}
                    style={{ color: "#1c2850" }}
                  />
                  <Card.Body>
                    <Card.Title class="fs-4 text-center">
                      {item.cardTitle}
                    </Card.Title>
                    <Card.Text>{item.cardText}</Card.Text>
                    <Button
                      variant="link"
                      className="fw-bold text-white link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Contact Us
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </CardGroup>
        </div>
      )}
    </>
  );
}
