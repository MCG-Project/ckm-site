import React from "react";
import { ContactForm } from "../components/Contact/ContactForm";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import ContactHeroImage from "../public/Images/ContactHeroImage.jpg";
import { ContactMain } from "../components/Contact/ContactMain";

export default function Contact() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[1].tab}
        description={MetaTagSEOData[1].description}
        keywords={MetaTagSEOData[1].keywords}
        socialTitle={MetaTagSEOData[1].socialTitle}
        socialDescription={MetaTagSEOData[1].socialDescription}
        socialImage={ContactHeroImage}
      />
      <ContactMain />
      <ContactForm />
    </>
  );
}
