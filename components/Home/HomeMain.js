import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Home1 from "../../public/Images/Home1.png";
import styles from "../../styles/Home.module.css";

export function HomeMain() {
  const homeMainData = [
    {
      titleContent: "Sell Your House Fast in the CSRA",
      textContent:
        "Whether your property is in pristine condition or in need of some TLC, we're here to make the process hassle-free and straightforward.",
      image: { Home1 },
      noContent: {
        first: "No Realtors",
        second: "No Expensive Fees",
        third: "No Commissions",
      },
    },
  ];

  return (
    <>
      <div className="d-flex flex-column p-5">
        <p className="fs-2 fw-bold text-center">
          {homeMainData[0].titleContent}
        </p>
        <div className="d-flex align-items-center">
          <Container className="d-flex justify-content-around">
            <Image src={Home1} className={styles.image} />
          </Container>
          <Container className="d-flex flex-column">
            <p className="w-75 fs-4">{homeMainData[0].textContent}</p>
            <p className="fs-5">
              <strong className="text-danger">X</strong>{" "}
              {homeMainData[0].noContent.first}
            </p>
            <p className="fs-5">
              <strong className="text-danger">X</strong>{" "}
              {homeMainData[0].noContent.second}
            </p>
            <p className="fs-5">
              <strong className="text-danger">X</strong>{" "}
              {homeMainData[0].noContent.third}
            </p>
          </Container>
        </div>
      </div>
    </>
  );
}
