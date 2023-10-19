import React from "react";
import { Container } from "react-bootstrap";
import Vid1 from "../../public/Videos/Vid1.mp4";
import styles from "../../styles/Home.module.css";

export function HomeVideo() {
  const homeVideoData = [
    {
      videoText:
        "We don't rely on approvals or inspections from third parties to facilitate the purchase of your house, streamlining the entire transaction for your convenience.",
    },
  ];

  return (
    <>
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
    </>
  );
}
