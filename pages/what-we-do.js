import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import { WhatWeDo } from "../components/WhatWeDo/WhatWeDo";
import LogoWhiteSmokeBG from "../public/Images/LogoWhiteSmokeBG.png";

export default function What_We_Do() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[4].tab}
        description={MetaTagSEOData[4].description}
        keywords={MetaTagSEOData[4].keywords}
        socialTitle={MetaTagSEOData[4].socialTitle}
        socialDescription={MetaTagSEOData[4].socialDescription}
        socialImage={LogoWhiteSmokeBG}
      />
      <WhatWeDo />
    </>
  );
}
