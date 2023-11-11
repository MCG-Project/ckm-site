import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import PropertySalesImage from "../public/Images/PropertySalesImage.jpg";
import { ServicesMain } from "../components/Services/ServicesMain";
import { serviceData } from "../components/Services/ServicesData";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[0].tab}
        description={MetaTagSEOData[0].description}
        keywords={MetaTagSEOData[0].keywords}
        socialTitle={MetaTagSEOData[0].socialTitle}
        socialDescription={MetaTagSEOData[0].socialDescription}
        socialImage={PropertySalesImage}
      />
      <ServicesMain />
    </>
  );
}
