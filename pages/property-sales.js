import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import PropertySalesImage from "../public/Images/PropertySalesImage.jpg";
import { Services } from "../components/Services/Services";
import { serviceData } from "../components/Services/ServicesData";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function PropertySales() {
  return (
    <>
      <MetaTag
        tab="Property Sales"
        description="XXX"
        keywords="XXX"
        socialTitle="XXX"
        socialDescription="XXX"
        socialImage={PropertySalesImage}
      />
      <Services
        title={serviceData[0].title}
        image={PropertySalesImage}
        icon={faCheck}
        altImage={serviceData[0].altImage}
        mainContent={serviceData[0].mainContent}
        listContent={serviceData[0].listContent}
        secondaryContent={serviceData[0].secondaryContent}
      />
    </>
  );
}
