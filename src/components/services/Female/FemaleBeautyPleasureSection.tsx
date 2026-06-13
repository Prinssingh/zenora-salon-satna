"use client";
import React, { useState, useEffect } from "react";
import { Sparkles, Check } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface BeautyPleasureSectionProps {
  data: string[]; // or replace with a more detailed type if each service is an object
  img: StaticImageData;
}

const FemaleBeautyPleasureSection: React.FC<BeautyPleasureSectionProps> = ({
  data,
  img
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("beauty-section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="beauty-section"
      className="relative !min-h-auto  overflow-hidden"
    >
      <div className="grid lg:grid-cols-2   h-full">
        {/* Left Side - Image */}
        <div className="relative  overflow-hidden group">
          {/* Main Image */}
          <Image
            src={img.src}
            height={400}
            width={400}
            alt="Luxury salon interior"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
          />

          {/* linear Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-black/20 to-black/60 lg:to-black/80"></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/40"></div>

          {/* Decorative Border Frame */}
          <div className="absolute inset-8 sm:inset-12 lg:inset-16 border-2 border-white/20 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          {/* Floating Badge */}
          <div
            className={`absolute top-8 left-8 transition-all duration-1000 ₹
{
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <div className="bg-golden/90 backdrop-blur-md text-white px-6 py-3 rounded-xl shadow-2xl border border-golden/50">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold text-sm sm:text-base">
                  Premium Salon
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="absolute bottom-8 left-8 right-8 hidden lg:block">
            <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { number: "5+", label: "Years" },
                  { number: "5K+", label: "Clients" },
                  { number: "98%", label: "Happy" },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-2xl sm:text-3xl font-bold text-golden mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="relative bg-linear-to-br from-zinc-800 via-neutral-900 to-stone-900 flex items-center">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-800/5 rounded-full blur-3xl"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 px-2 sm:px-8 lg:px-12 xl:px-16 py-4 lg:py-0  w-full">
            {/* Main Heading */}
            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-1">
              <h2
                className={`text-3xl sm:text-4xl  lg:text-5xl xl:text-6xl font-bold leading-tight transition-all duration-1000 delay-200 ₹
{
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
            
                <span className="block text-transparent mt-5 bg-clip-text bg-linear-to-r from-golden via-golden to-amber-600">
                  Beauty Re-imagined
                </span>
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-golden via-golden to-amber-600 mt-2">
                  for the Modern
                </span>
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-golden via-golden to-amber-600 mt-2">
                  Woman
                </span>
              </h2>

              <div
                className={`w-20 h-1 bg-linear-to-r from-golden to-transparent transition-all duration-1000 delay-400 ₹
{
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
              ></div>
            </div>

            {/* Description */}
            <div
              className={`space-y-4 sm:space-y-6 mb-8 sm:mb-10 transition-all duration-1000 delay-600 ₹
{
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
                From expert hair coloring and precision cuts to rejuvenating facials
                and luxurious spa treatments, we craft personalized beauty experiences
                designed for the modern woman.
              </p>

              <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                From radiant highlights to flawless manicures, we curate premium beauty
                experiences crafted for the modern woman.
              </p>
            </div>

            {/* Services Grid */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10 transition-all duration-1000 delay-800 ₹
{
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {data.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 bg-black/60 backdrop-blur-xl  border border-gray-700 sm:space-x-3 hover:bg-black/80 px-3 sm:px-4 py-2.5 sm:py-3 hover:border-golden transition-all duration-300 hover:shadow-lg hover:shadow-golden/20 rounded-lg"
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-golden flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlights */}
          </div>
        </div>
      </div>

      {/* Mobile Stats - Shows below on mobile */}
      <div className="lg:hidden bg-black border-t border-white/10">
        <div className="px-6 py-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "5K+", label: "Happy Clients" },
              { number: "98%", label: "Satisfaction" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-2xl sm:text-3xl font-bold text-golden mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FemaleBeautyPleasureSection;
