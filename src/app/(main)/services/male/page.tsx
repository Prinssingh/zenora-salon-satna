import BarbershopPricing from "@/components/home/BarbershopPricing";
import NewsletterSection from "@/components/home/NewsletterSection";

import HeroSection from "@/components/services/mens/HeroSection";
import BeautyPleasureSection from "@/components/services/mens/BeautyPleasureSection";
import HairSalonShowcase from "@/components/services/mens/HairSalonShowcase";

import ServiceCategoriesOverview from "@/components/services/mens/ServiceCategoriesOverview";

import hero from "@/assets/male/hero1.png";
import React from "react";
import {
  MaleAdditionalServices,
  MaleSection,
  serviceCategoriesMale,
} from "@/lib/data";
import { Metadata } from "next";
import ManBarBerShopPricing from "@/components/services/mens/ManBarBerShopPricing";


export const metadata: Metadata = {
  title:
    "Men's Salon Services | Zenora Unisex Salon Satna – Haircuts, Grooming, Beard Styling & Skin Care",
  description:
    "Explore premium men's salon services at Zenora Unisex Salon Satna, including modern haircuts, beard styling, skin care, facials, tan removal, grooming packages, hair color, and luxury men's beauty treatments. Experience 20+ years of expertise.",
  keywords: [
    "men salon satna",
    "men grooming satna",
    "men haircut satna",
    "men's hair salon near me",
    "hair salons closest to me",
    "men's beard styling",
    "beard trimming satna",
    "men's facial",
    "men's skincare satna",
    "skin whitening treatments",
    "whole body wax",
    "body waxes",
    "beauty parlour near me",
    "salon near me",
    "parlour near me",
    "Zenora Unisex Salon male services",
    "grooming packages Satna",
    "premium men's salon Satna",
    "men hair color",
    "men's beauty treatments",
    "men's grooming near me",
    "best men salon Satna",
  ],
  alternates: {
    canonical: "https://zenorasalon.com/services/male",
  },
};

export default function Page() {
  const title = "Modern Gentleman’s Look";
  const des = "Our Signature Men's Styles";
  const des1 = "Precision, Confidence & Timeless Elegance";

  return (
    <div>
      <HeroSection />
      <HairSalonShowcase
        data={MaleSection}
        title={title}
        des={des}
        des1={des1}
      />
      <ManBarBerShopPricing />

      <ServiceCategoriesOverview data={serviceCategoriesMale} />
      <BeautyPleasureSection data={MaleAdditionalServices} img={hero} />
      <NewsletterSection />
    </div>
  );
}
