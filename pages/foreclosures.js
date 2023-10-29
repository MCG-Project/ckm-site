import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import ForeclosureImage from "../public/Images/ForeclosureImage.jpg";
import { Services } from "../components/Services/Services";
import { serviceData } from "../components/Services/ServicesData";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Foreclosures() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[1].tab}
        description={MetaTagSEOData[1].description}
        keywords={MetaTagSEOData[1].keywords}
        socialTitle={MetaTagSEOData[1].socialTitle}
        socialDescription={MetaTagSEOData[1].socialDescription}
        socialImage={ForeclosureImage}
      />
      <Services
        title={serviceData[1].title}
        image={ForeclosureImage}
        icon={faCheck}
        altImage={serviceData[1].altImage}
        mainContent={serviceData[1].mainContent}
        listContent={serviceData[1].listContent}
        secondaryContent={serviceData[1].secondaryContent}
      />
    </>
  );
}
