import React from "react";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { Container } from "react-bootstrap";
import Vid1 from "../../public/Videos/Vid1.mp4";
import styles from "../../styles/Home.module.css";

export function HomeBanner() {
  const { isMobile } = useDeviceDetect();

  const homeVideoData = [
    {
      bannerText: "Call Us Today! (706)-814-4848",
    },
  ];

  return (
    <>
      {isMobile ? (
        <div className="align-items-center p-3" id={styles.greyBlue}>
          <p className="fs-4 fw-bold text-center text-white">
            {homeVideoData[0].bannerText}
          </p>
        </div>
      ) : (
        // Browser
        <div className="align-items-center p-3" id={styles.greyBlue}>
          <p className="fs-4 fw-bold text-center text-white">
            {homeVideoData[0].bannerText}
          </p>
        </div>
      )}
    </>
  );
}
