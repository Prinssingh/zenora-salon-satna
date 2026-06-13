import React from "react";

import ServiceCategoriesOverview from "@/components/services/mens/ServiceCategoriesOverview";
import NewsletterSection from "@/components/home/NewsletterSection";
import {
  FemaleAdditionalServices,
  FemaleSection,
  serviceCategoriesFemale,
} from "@/lib/data";
import hero from "@/assets/female/f_hero.png";
import { Metadata } from "next";
import HeroSection from "@/components/services/Female/HeroSection";
import FeamleBarbershopPricing from "@/components/services/Female/FemaleBarbershopPricing";
import FemaleBeautyPleasureSection from "@/components/services/Female/FemaleBeautyPleasureSection";
import FemaleHairSalonShowcase from "@/components/services/Female/FemaleHaireShowCase";

export const metadata: Metadata = {
  title:
    "Women's Salon Services | Zenora Unisex Salon Satna – Hair, Beauty, Makeup & Skin Treatments",
  description:
    "Explore premium women's salon services at Zenora Unisex Salon Satna — hair styling, smoothing, coloring, facials, skin whitening, waxing, bridal makeup, party makeup, and luxury beauty treatments. Powered by 20+ years of salon expertise.",
  keywords: [
    // Primary Keywords
    "beauty parlour near me",
    "beauty parlour salon",
    "bridal makeup",
    "bridal hd make up",
    "wedding makeup",
    "bridal makeup near me",
    "bridal makeup artist near me",
    "best indian makeup artist",
    "wedding makeup artist",
    "wedding makeup prices",
    "skin whitening treatments",
    "whole body wax",
    "whole body wax price",
    "body waxes",
    "salon near me",
    "parlour near me",

    // Zenora Female Services
    "women salon satna",
    "women beauty parlour satna",
    "women hair styling satna",
    "hair smoothing satna",
    "hair coloring satna",
    "women skincare satna",
    "women facial satna",
    "women waxing satna",
    "women grooming satna",
    "best beauty parlour satna",
    "premium beauty services satna",
    "female salon treatments Satna",
    "Zenora Unisex Salon female services",
    "party makeup satna",
    "pre-bridal packages satna",
  ],
  alternates: {
    canonical: "https://zenorasalon.com/female-services",
  },
};
export default function Page() {
  const title = "Creative Hair Experts";
  const des = "Our Signature Styles";
  const des1 = "Discover the artistry that sets us apart";

  return (
    <div>
      <HeroSection />
      <FemaleHairSalonShowcase
        data={FemaleSection}
        title={title}
        des={des}
        des1={des1}
      />
      <FeamleBarbershopPricing />
      <ServiceCategoriesOverview data={serviceCategoriesFemale} />
      <FemaleBeautyPleasureSection img={hero} data={FemaleAdditionalServices} />
      <NewsletterSection />
    </div>
  );
}
