import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Home1 from "../../public/Images/Home1.png";
import styles from "../../styles/Home.module.css";

export function HomeAbout() {
  const homeAboutData = [
    {
      aboutName: "Chris Krausnick",
      aboutContent:
        "Chris is a seasoned real estate expert with a passion for selling properties fast. His commitment to delivering hassle-free experiences to homeowners and investors alike has earned him a stellar reputation in the industry. When you're looking to close deals fast and make the most of your real estate investments, Chris is the trusted partner you can rely on. ",
    },
  ];

  return (
    <>
      <div className="d-flex flex-column p-5" id={styles.blue}>
        <div className="d-flex align-items-center">
          <Container className="d-flex justify-content-around">
            <Image src={Home1} className={styles.image} />
          </Container>
          <Container>
            <p className="w-75 fw-bold fs-4 text-white">
              {homeAboutData[0].aboutName}
            </p>
            <p className="w-75 fs-5 text-white">
              {homeAboutData[0].aboutContent}
            </p>
          </Container>
        </div>
      </div>
    </>
  );
}
