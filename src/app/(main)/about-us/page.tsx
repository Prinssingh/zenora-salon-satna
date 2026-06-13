import HeroSection from "@/components/about/HeroSection";
import ZenoraAmbianceSection from "@/components/about/ZenoraAmbianceSection";
import ZenoraJourneySection from "@/components/about/ZenoraJourneySection";
import AboutSection from "@/components/home/AboutSection";
import BarbershopPricing from "@/components/home/BarbershopPricing";
import NewsletterSection from "@/components/home/NewsletterSection";
import TeamSection from "@/components/home/TeamSection";
import VideoGallery from "@/components/home/VideoGallary";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Metadata } from "next";
import React from "react";



export const metadata: Metadata = {
  title:
    "About Zenora Unisex Salon Satna – Premium Beauty, Hair & Makeup Experts",
  description:
    "Learn about Zenora Unisex Salon in Satna – a premium beauty destination with 20+ years of expertise. Discover our founders’ journey, professional team, luxury salon experience, and commitment to delivering world-class grooming, beauty, hair, and makeup services for men and women.",
  keywords: [
    "Zenora Unisex Salon Satna",
    "About Zenora Salon",
    "Zenora Salon Founders",
    "Zenora Salon Team",
    "Premium Salon Satna",
    "Luxury Unisex Salon",
    "Professional Makeup Artists Satna",
    "Top Beauty Salon Satna",
    "Experienced Beauticians Satna",
    "Best Hair Stylists Satna",
    " beauty parlour near me",
    "beauty parlour salon",
    "best indian makeup artist",
    "body waxes",
    "bridal hd make up",
    "bridal makeup",
    "bridal makeup artist near me",
    "bridal makeup charges",
    "bridal makeup near me",
    "parlour",
    "salon near me",
    "near by me salon",
    "skin whitening treatments",
    "wedding makeup",
    "wedding makeup artist",
    "wedding makeup prices",
    "whole body wax",
    "whole body wax price",
    "hair salons closest to me",
    "hair salon near me",
    "satna salon",
    "zenora beauty parlour satna",
    "zenora makeup studio",
    "zenora founders",
    "mr shiv sen zenora",
    "mr prince sen zenora",
  ],
  alternates: {
    canonical: "https://zenorasalon.com/about-us",
  }
}
export default function Page() {

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ZenoraJourneySection />
      <TeamSection />
      <BarbershopPricing />
      <ZenoraAmbianceSection />
      <NewsletterSection />
      <ScrollToTopButton />
    </div>
  );
}
