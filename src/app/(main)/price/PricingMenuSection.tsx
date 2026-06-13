"use client";

import React from "react";

import PriceList from "@/components/price/HairServices";
import GlobalHairColor from "@/components/price/GlobalHairColor";
import HairMakeover from "@/components/price/HairMakeover";

import HairServicess from "@/components/price/HairServicess";
import CleaningCleanup from "@/components/price/CleaningCleanup";
import GlowingFacial from "@/components/price/GlowingFacial";
import OneDayPackages from "@/components/price/OneDayPackages";
import SalonServices from "@/components/price/SalonServices";

const PricingMenuSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 lg:py-28 px-2  lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-10 mt-10 py-1">
        <h2 className="text-4xl font-bold text-golden mb-4">
          Our Premium Services
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover the art of grooming excellence — from haircuts to facials,
          each service is crafted for perfection.
        </p>
      </div>
      <PriceList />
      <GlobalHairColor />
      <HairMakeover />

      <h1 className="text-center font-bold text-4xl mt-10 sm:text-5xl md:text-6xl text-golden py-4 tracking-wide">
        Men’s Grooming
      </h1>
      <div className="flex justify-center">
        <div className="w-24 h-[2px] bg-golden mt-2 rounded-full"></div>
      </div>

      <HairServicess />

      <CleaningCleanup />
      <GlowingFacial />
      <OneDayPackages />
      <SalonServices />
     
    </section>
  );
};

export default PricingMenuSection;
