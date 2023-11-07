import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import { WhatWeDo } from "../components/WhatWeDo/WhatWeDo";
import LogoWhiteSmokeBG from "../public/Images/LogoWhiteSmokeBG.png";

export default function What_We_Do() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[5].tab}
        description={MetaTagSEOData[5].description}
        keywords={MetaTagSEOData[5].keywords}
        socialTitle={MetaTagSEOData[5].socialTitle}
        socialDescription={MetaTagSEOData[5].socialDescription}
        socialImage={LogoWhiteSmokeBG}
      />
      <WhatWeDo />
    </>
  );
}
