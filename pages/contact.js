import React from "react";
import { ContactForm } from "../components/Contact/ContactForm";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import ContactHeroImage from "../public/Images/ContactHeroImage.jpg";
import { ContactMain } from "../components/Contact/ContactMain";
import { Form, Button, InputGroup, Container } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[2].tab}
        description={MetaTagSEOData[2].description}
        keywords={MetaTagSEOData[2].keywords}
        socialTitle={MetaTagSEOData[2].socialTitle}
        socialDescription={MetaTagSEOData[2].socialDescription}
        socialImage={ContactHeroImage}
      />
      <ContactMain />
      <ContactForm />
    </>
  );
}
