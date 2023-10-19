import React from "react";
import Head from "next/head";
import Image from "next/image";
import PropertySalesImage from "../public/Images/PropertySalesImage.jpg";
import { Services } from "../components/Services/Services";
import { propertySalesData } from "../components/Services/ServicesData";
import { Button } from "react-bootstrap";
import styles from "../styles/Services.module.css";

export default function PropertySales() {
  return (
    <>
      <Head>
        <title>CK&M | Property Sales</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="d-flex align-items-center flex-column position-relative">
        <Image
          src={PropertySalesImage}
          className={styles.cardBoxOverlay}
          alt="Property Sale Image by Rebecca Matthews from Pixabay"
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
            top: "10%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          Property Sales
        </h1>
        <Services
          mainContent={propertySalesData.mainContent}
          listContent={propertySalesData.listContent}
          secondaryContent={propertySalesData.secondaryContent}
        />
        <Button href="/contact" className="fw-bold" variant="dark">
          Contact Us
        </Button>
      </div>
    </>
  );
}
