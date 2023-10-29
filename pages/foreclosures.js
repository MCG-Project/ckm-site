import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import ForeclosureImage from "../public/Images/ForeclosureImage.jpg";
import { Services } from "../components/Services/Services";
import { serviceData } from "../components/Services/ServicesData";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Foreclosures() {
  return (
    <>
      <MetaTag
        tab="Foreclosures"
        description="XXX"
        keywords="XXX"
        socialTitle="XXX"
        socialDescription="XXX"
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
