"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Star,

} from "lucide-react";
import { motion } from "framer-motion";

import { teamMembers } from "@/lib/data";


const TeamSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [visibleMembers, setVisibleMembers] = useState<number>(3);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Use centralized data from data.ts

  // Responsive visible members
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth >= 1024) setVisibleMembers(3); // lg
      else if (window.innerWidth >= 640) setVisibleMembers(2); // sm/md
      else setVisibleMembers(1); // mobile
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxSlide = Math.max(0, teamMembers.length - visibleMembers);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // --- Swipe Handlers (Mobile Finger Swipe) ---
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50; // pixels to detect swipe

    if (diff > swipeThreshold) {
      nextSlide(); // swipe left → next
    } else if (diff < -swipeThreshold) {
      prevSlide(); // swipe right → previous
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/80 py-16 sm:px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block">
            <span className="bg-golden hover:scale-105 duration-200 ease-in text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase border border-golden shadow-sm flex items-center space-x-2">
              <span>Creative Hair Experts</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-4">
            <span className="block">OUR AWARD WINNER HAIRCARE & STYLING</span>
            <span className="block mt-2 text-golden">EXPERTS FOR MEN & WOMEN</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-golden to-transparent mx-auto"></div>
        </div>

        {/* Team Grid/Carousel */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `-${currentSlide * (100 / visibleMembers)}%`,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 sm:px-4"
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <motion.div
                    className="group relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: member.id * 0.2 }}
                  >
                    {/* Card Container */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                      {/* Image */}
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <motion.img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.7 }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                        {/* Hover Overlay with Social Icons */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-golden/95 via-golden/90 to-golden/80 transition-opacity duration-500 ${
                            hoveredMember === member.id
                              ? "opacity-50"
                              : "opacity-0"
                          }`}
                        >
                          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
                        
                            <div className="text-center px-6">
                              <p className="text-black opacity-100 text-sm font-medium">
                                {member.specialty}
                              </p>
                              <div className="flex items-center justify-center space-x-1 mt-2">
                                {[...Array(member.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 fill-yellow-500 text-yellow-400"
                                  />
                                ))}
                              </div>
                            </div>
                            {/* <button className="bg-white text-amber-700 px-6 py-2 rounded-full font-semibold text-sm hover:bg-amber-50 transition-all duration-300 transform hover:scale-105">
                              Book Now
                            </button> */}
                          </div>
                        </div>
                      </div>

                      {/* Brush Stroke Banner */}
                      <div className="absolute bottom-0 left-0 right-0 z-10">
                        <svg
                          viewBox="0 0 400 120"
                          className="w-full h-auto"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <filter id={`brush-${member.id}`}>
                              <feTurbulence
                                type="fractalNoise"
                                baseFrequency="0.02"
                                numOctaves="3"
                              />
                              <feDisplacementMap in="SourceGraphic" scale="8" />
                            </filter>
                          </defs>
                          <path
                            d="M 0 60 Q 100 45, 200 55 T 400 50 L 400 120 L 0 120 Z"
                            fill={
                              member.brushColor === "amber"
                                ? "#d97706"
                                : "#1e293b"
                            }
                            filter={`url(#brush-${member.id})`}
                            className="transition-all duration-500 group-hover:fill-amber-600"
                          />
                        </svg>

                        {/* Text on Brush */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white pb-2">
                          <p className="text-xs sm:text-sm font-medium tracking-wider opacity-90 uppercase">
                            {member.role}
                          </p>
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-wide">
                            {member.name}
                          </h3>
                        </div>
                      </div>

                      {/* Award Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-amber-500 text-white p-2 rounded-full shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                          <Award className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows - Desktop */}
          <div className="hidden lg:block">
            <button
              aria-label="Previous slide"
              title="Previous slide"
              onClick={prevSlide}
              className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white hover:bg-golden text-gray-800 hover:text-white p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 z-30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              aria-label="Next slide"
              title="Next slide"
              onClick={nextSlide}
              className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white hover:bg-golden text-gray-800 hover:text-white p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 z-30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center space-x-3 mt-8 sm:mt-12">
          {[...Array(maxSlide + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "w-12 h-3 bg-golden"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex lg:hidden items-center justify-center space-x-4 mt-8">
          <button
            aria-label="Previous slide"
            title="Previous slide"
            onClick={prevSlide}
            className="bg-white hover:bg-golden text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next slide"
            title="Next slide"
            onClick={nextSlide}
            className="bg-white hover:bg-golden text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
