import React from "react";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { Container, Card, CardGroup, Button } from "react-bootstrap";
import {
  faHouseCrack,
  faHouseCircleCheck,
  faHouseUser,
  faHouseCircleExclamation,
  faHouseLock,
  faHouseCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Home.module.css";

export function HomeCard() {
  const { isMobile } = useDeviceDetect();

  const homeCardGroup = [
    {
      cardTitle: "Vacant Properties",
      cardImage: faHouseCircleXmark,
      cardText:
        "Unlock the potential of vacant properties with our hassle-free solutions, providing fair, all-cash offers tailored to your needs.",
    },
    {
      cardTitle: "Troublesome Tenants",
      cardImage: faHouseUser,
      cardText:
        "Say goodbye to tenant troubles. We specialize in navigating the challenges of troublesome tenants, offering straightforward solutions for a stress-free experience.",
    },
    {
      cardTitle: "Inherited Properties",
      cardImage: faHouseCircleCheck,
      cardText:
        "Navigate the complexities of inherited estates effortlessly. Our fair, all-cash offers provide a seamless solution for unlocking value from inherited properties.",
    },
    {
      cardTitle: "Fixer-Upper",
      cardImage: faHouseCrack,
      cardText:
        "Transform your fixer-upper into cash. Our expertise ensures a fair, all-cash offer for properties in need of repair, making the selling process smooth and straightforward.",
    },
    {
      cardTitle: "Unwanted Properties",
      cardImage: faHouseCircleExclamation,
      cardText:
        "Turn unwanted properties into valuable assets. We specialize in providing fair, all-cash offers for real estate you no longer wish to keep, offering a simple and efficient solution.",
    },
    {
      cardTitle: "Pre-Foreclosures",
      cardImage: faHouseLock,
      cardText:
        "Facing pre-foreclosure challenges? We provide tailored solutions with fair, all-cash offers to help you navigate the complexities and secure a stress-free resolution.",
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
                  <Card.Title className="fs-4 text-center">
                    {item.cardTitle}
                  </Card.Title>
                  <Card.Text>{item.cardText}</Card.Text>
                  <Button
                    variant="link"
                    className="fw-bold align-bottom text-white link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
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
        <Container className="d-flex p-5">
          <CardGroup className="d-flex row-cols-md-3">
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
                    <Card.Title className="fs-4 text-center">
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
        </Container>
      )}
    </>
  );
}
