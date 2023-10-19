import React from "react";
import { stepData } from "./WhatWeDoData";
import { Card, CardGroup, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/WhatWeDo.module.css";

export function StepCard() {
  return (
    <>
      <Container className="d-flex p-5">
        <CardGroup className="d-flex justify-content-evenly w-100">
          {stepData.map((item) => (
            <div className="d-flex justify-content-center col">
              <Card
                style={{ width: "15rem", backgroundColor: "whitesmoke" }}
                className="border-0"
              >
                <FontAwesomeIcon
                  icon={item.cardNumber}
                  className={styles.icon}
                />
                <Card.Body>
                  <Card.Title className="fw-bold fs-4 mb-1 text-center">
                    {item.titleContent}
                  </Card.Title>
                  <Card.Text className="text-center fs-5 mt-3">
                    {item.textContent}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </CardGroup>
      </Container>
    </>
  );
}
