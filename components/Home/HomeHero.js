import React from "react";
import Image from "next/image";
import useDeviceDetect from "../../utils/useDeviceDetect";
import HomeHeroImage from "../../public/Images/HomeHeroImage.jpg";
import styles from "../../styles/Home.module.css";

export function HomeHero() {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      {isMobile ? (
        <div className="d-flex align-items-center flex-column position-relative">
          <Image
            src={HomeHeroImage}
            className={styles.mobileCardBoxOverlay}
            alt="Porch Image by Gretta Blankenship at Pixabay"
          />
          <h1 className="mt-3 fw-bold">CK&M</h1>
          <h3 className="mb-3 fw-bold">Property Services</h3>
        </div>
      ) : (
        // Browser
        <div className="d-flex align-items-center flex-column position-relative">
          <Image
            src={HomeHeroImage}
            className={styles.cardBoxOverlay}
            alt="Porch Image by Gretta Blankenship at Pixabay"
            style={{
              width: "100%",
              height: "50vh",
              objectFit: "cover",
            }}
          />
          <h1
            className="mt-3 fw-bold"
            style={{
              color: "#272514",
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            CK&M
          </h1>
          <h3
            className="mb-3 fw-bold"
            style={{
              color: "#272514",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            Property Services
          </h3>
        </div>
      )}
    </>
  );
}
