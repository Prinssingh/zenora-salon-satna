"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import pic from "@/assets/Testimonial/testimonials-slider.png"

export default function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  // Use centralized data from data.ts

  useEffect(() => {
    // Run only in browser
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Initialize
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
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
    <div className="relative min-h-[95vh] h-[50vh] mx-auto bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={pic.src}
          alt="Barbershop Interior"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/80"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black/80"></div>
      </div>

      {/* Content Container */}
      <div
        className="relative z-10 container mx-auto px-2 py-12 lg:py-20 min-h-screen flex items-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full">
          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
            {/* Display current and next testimonial */}

            {[0, 1].map((offset) => {
              const index = (currentSlide + offset) % testimonials.length;
              const testimonial = testimonials[index];

              // ✅ Safe check — no "window is not defined" anymore
              const isVisible =
                offset === 0 || (windowWidth !== null && windowWidth >= 1024);

              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10 hidden lg:block"
                  }`}
                >
                  <div className="bg-white/90 mx-2 backdrop-blur-md border border-white rounded-2xl p-8 lg:p-10 hover:bg-white/90 hover:border-golden transition-all duration-300 group">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-full border-2 border-golden flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Quote
                          className="w-8 h-8 text-golden"
                          fill="currentColor"
                        />
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-black lg:h-30 h-50  text-lg lg:text-xl leading-relaxed mb-8 font-light">
                      {testimonial.text}
                    </blockquote>

                    {/* Divider */}
                    <div className="w-full h-px bg-linear-to-r from-transparent via-golden to-transparent mb-6"></div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-golden flex items-center justify-center border-2 border-golden">
                        <span className="text-black font-bold text-lg">
                          {testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="text-golden font-bold tracking-wider text-sm">
                          {testimonial.author}
                        </p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-golden"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 cursor-pointer rounded-full border-2 border-gray-700 hover:border-golden flex items-center justify-center text-gray-400 hover:text-golden transition-all duration-300 hover:scale-110 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 group-hover:translate-x-[-2px] transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    index === currentSlide
                      ? "w-12 bg-golden"
                      : "w-2 bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 cursor-pointer rounded-full border-2 border-gray-700 hover:border-golden flex items-center justify-center text-gray-400 hover:text-golden transition-all duration-300 hover:scale-110 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-[2px] transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute hidden md:block top-20 left-10 w-40 h-40 bg-golden opacity-80 blur-3xl rounded-full"></div>
      <div className="absolute  hidden md:block bottom-20 right-10 w-40 h-40 bg-golden opacity-70 blur-3xl rounded-full"></div>
    </div>
  );
}
