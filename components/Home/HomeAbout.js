import React from "react";
import Image from "next/image";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { Container } from "react-bootstrap";
import Home1 from "../../public/Images/Home1.png";
import styles from "../../styles/Home.module.css";

export function HomeAbout() {
  const { isMobile } = useDeviceDetect();

  const homeAboutData = [
    {
      aboutName: "Chris Krausnick",
      aboutContent:
        "Chris is a seasoned real estate expert with a passion for selling properties fast. His commitment to delivering hassle-free experiences to homeowners and investors alike has earned him a stellar reputation in the industry. When you're looking to close deals fast and make the most of your real estate investments, Chris is the trusted partner you can rely on. ",
    },
  ];

  return (
    <>
      {isMobile ? (
        <div className="d-flex flex-column pt-5 pb-3">
          <Container className="d-flex justify-content-center">
            <Image src={Home1} className={styles.mobileImage} />
          </Container>
          <Container>
            <p className="fw-bold pt-3 fs-4 text-center">
              {homeAboutData[0].aboutName}
            </p>
            <p className=" p-2 fs-5">{homeAboutData[0].aboutContent}</p>
          </Container>
        </div>
      ) : (
        // Browser
        <div className="d-flex flex-column p-5">
          <div className="d-flex align-items-center">
            <Container className="d-flex justify-content-around">
              <Image src={Home1} className={styles.image} />
            </Container>
            <Container>
              <p className="w-75 fw-bold fs-4">{homeAboutData[0].aboutName}</p>
              <p className="w-75 fs-5">{homeAboutData[0].aboutContent}</p>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}
