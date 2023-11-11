import React, { useEffect, useState } from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import { MoreInfoForm } from "../components/MoreInfo/MoreInfoForm";
import { MoreInfoMain } from "../components/MoreInfo/MoreInfoMain";
import ContactHeroImage from "../public/Images/ContactHeroImage.jpg";

export default function MoreInfo() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  useEffect(() => {
    // This code runs on the client side
    const userInput = JSON.parse(sessionStorage.getItem("userInput"));

    if (userInput) {
      setUserName(userInput[0].userName);
      setUserEmail(userInput[0].userEmail);
      setUserPhone(userInput[0].userPhone);
      setContactNumber(userInput[0].contactNumber);
    }

    console.log(userInput[0].userName);
  }, []);
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
      <MoreInfoMain />
      <MoreInfoForm
        userName={userName}
        userEmail={userEmail}
        userPhone={userPhone}
        contactNumber={contactNumber}
      />
    </>
  );
}
