import React from "react";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { Container } from "react-bootstrap";
import Vid1 from "../../public/Videos/Vid1.mp4";
import styles from "../../styles/Home.module.css";

export function HomeVideo() {
  const { isMobile } = useDeviceDetect();

  const homeVideoData = [
    {
      videoText:
        "We don't rely on approvals or inspections from third parties to facilitate the purchase of your house, streamlining the entire transaction for your convenience.",
    },
  ];

  return (
    <>
      {isMobile ? (
        <div
          className="d-flex flex-column align-items-center pt-3"
          id={styles.greyBlue}
        >
          <Container className="d-flex">
            <p className=" fs-4 fw-bold text-white p-3">
              {homeVideoData[0].videoText}
            </p>
          </Container>
          <Container className="d-flex justify-content-start pb-5">
            <video
              controls
              className="card-box m-auto"
              style={{
                width: "20rem",
                borderRadius: "5px",
              }}
            >
              <source src={Vid1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Container>
        </div>
      ) : (
        // Browser
        <div className="d-flex align-items-center p-5" id={styles.greyBlue}>
          <Container className="d-flex justify-content-end">
            <p className="w-75 fs-4 fw-bold text-white">
              {homeVideoData[0].videoText}
            </p>
          </Container>
          <Container className="d-flex justify-content-start">
            <video
              controls
              className="card-box"
              style={{
                width: "25rem",
                marginLeft: "3rem",
                borderRadius: "5px",
              }}
            >
              <source src={Vid1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Container>
        </div>
      )}
    </>
  );
}
