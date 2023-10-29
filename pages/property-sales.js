import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import PropertySalesImage from "../public/Images/PropertySalesImage.jpg";
import { Services } from "../components/Services/Services";
import { serviceData } from "../components/Services/ServicesData";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function PropertySales() {
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
