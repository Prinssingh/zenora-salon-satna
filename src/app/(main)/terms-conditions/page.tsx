import React from "react";

import HeroSection from "@/components/privacy/HeroSection";
import TermsConditions from "./TermsConditions";
import TermsHeroSection from "./HeroSection";

export default function Page() {
  return (
    <>
      <TermsHeroSection />
      <TermsConditions />
    </>
  );
}
