import React from "react";
import Image from "next/image";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { Container } from "react-bootstrap";
import Home1 from "../../public/Images/Home1.png";
import styles from "../../styles/Home.module.css";

export function HomeReview() {
  const { isMobile } = useDeviceDetect();

  const homeReviewData = [
    {
      reviewName: "Catherine Gunnoe",
      reviewContent:
        "I was referred to CK&M Property Services when seeking a solution to sell my home. I worked closely with Chris Krausnick on all the particulars where he carefully explained the step-by-step process. He has proved to be a dedicated, detailed and devoted professional in finding the perfect resolution that worked for me. Thank you CK&M Property Services and Chris Krausnick for a job well done!",
    },
  ];

  return (
    <>
      {isMobile ? (
        <div className="d-flex flex-column pt-5 pb-3" id={styles.blue}>
          <Container>
            <p className="p-2 fs-5 text-white">
              {homeReviewData[0].reviewContent}
            </p>
            <p className="pt-3 fs-4 text-white text-center">
              <i>~ {homeReviewData[0].reviewName}</i>
            </p>
          </Container>
        </div>
      ) : (
        // Browser
        <div className="d-flex flex-column p-5" id={styles.blue}>
          <div className="d-flex align-items-center">
            <Container>
              <p className="fs-5 text-center text-white">
                {homeReviewData[0].reviewContent}
              </p>
              <p className="text-center fs-4 text-white">
                <i>~ {homeReviewData[0].reviewName}</i>
              </p>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}
