"use client";
import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  brushColor: string;
  rating: number;
  specialty: string;
}

interface HairSalonShowcaseProps {
  data: TeamMember[];
  title: string;
  des: string;
  des1: string;
}
const HairSalonShowcase: React.FC<HairSalonShowcaseProps> = ({
  data,
  title,
  des,
  des1,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [visibleMembers, setVisibleMembers] = useState<number>(3);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive visible members
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth >= 1024) setVisibleMembers(3);
      else if (window.innerWidth >= 640) setVisibleMembers(2);
      else setVisibleMembers(1);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxSlide = Math.max(0, data.length - visibleMembers);

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
    <section className=" py-10 bg-linear-to-br from-gray-50 via-white to-amber-50/80  sm:px-2  lg:px-8 overflow-hidden">
      <div>
        {/* Section Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block">
            <span className="bg-golden hover:scale-105 duration-200 ease-in text-white px-2 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase border border-golden shadow-sm flex items-center space-x-2">
              <span>{title}</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight px-4">
            <span className="block">{des}</span>
            <span className="block ">{des1}</span>
          </h2>

          <div className="w-20 h-1 bg-linear-to-r from-transparent via-golden to-transparent mx-auto"></div>
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
              {data.map((member) => (
                <div
                  key={member.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4"
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <motion.div
                    className="group relative  rounded-xl  overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: member.id * 0.2 }}
                  >
                    <div className="relative   overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                      <div className="w-full h-60">
                        <motion.img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.7 }}
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
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
              className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-golden/50 hover:bg-golden text-gray-800 hover:text-white p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 z-30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              aria-label="Next slide"
              title="Next slide"
              onClick={nextSlide}
              className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-golden/50 hover:bg-golden text-gray-800 hover:text-white p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 z-30"
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

export default HairSalonShowcase;
