import NewsletterSection from "@/components/home/NewsletterSection";
import HeroSection from "@/components/portfolio/HeroSection";
import VideoSection from "@/components/portfolio/VideoSection";
import hero from "@/assets/male/hero1.png";
import React from "react";
import { MaleAdditionalServices } from "@/lib/data";
import ZenoraAmbianceSection from "@/components/about/ZenoraAmbianceSection";
import { Metadata } from "next";
import PriceBeautyPleasureSection from "@/components/portfolio/PriceBeautyPleasureSection";
import VideoGallery from "@/components/home/VideoGallary";
import TeamSection from "@/components/home/TeamSection";
export const metadata :Metadata = {
  title:
    "Portfolio | Zenora Unisex Salon Satna – Bridal Makeup, Hair Styling & Beauty Transformations",
  description:
    "Explore the Zenora Unisex Salon portfolio featuring premium bridal makeup, HD makeup looks, hair styling, grooming transformations, men's and women's salon services, and luxury beauty work in Satna. Discover our professional artistry and 20+ years of experience.",
  keywords: [
    "Zenora salon portfolio",
    "Zenora makeup portfolio",
    "bridal makeup Satna",
    "bridal hd make up",
    "best indian makeup artist",
    "bridal makeup near me",
    "wedding makeup artist",
    "Zenora Unisex Salon gallery",
    "beauty parlour salon",
    "hair styling portfolio",
    "skin whitening treatments",
    "body waxes",
    "whole body wax",
    "salon near me",
    "beauty parlour near me",
    "parlour near me",
    "hair salon near me",
    "premium salon Satna",
    "Zenora transformations",
    "professional makeup artist Satna",
    "wedding makeup portfolio",
    "bridal makeup charges",
    "hair salons closest to me",
  ],
  alternates: {
    canonical: "https://zenorasalon.com/portfolio",
  },
}
export default function Page() {



  return (
    <div className="bg-linear-to-br from-zinc-900 via-neutral-900 to-stone-900 text-white">
      <HeroSection />
      <VideoSection />
      <ZenoraAmbianceSection />

      <VideoGallery />
      <TeamSection />
      <PriceBeautyPleasureSection data={MaleAdditionalServices} img={hero} />
      <NewsletterSection />
    </div>
  );
}
