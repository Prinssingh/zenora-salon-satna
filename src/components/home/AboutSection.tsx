"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { aboutFeatures } from "@/lib/data";
import AboutHero from "@/assets/about/about-hero.jpg";
import Image from "next/image";

const AboutSection: React.FC = () => {
  // Use centralized data from data.ts
  const features = aboutFeatures;

  const location = usePathname();
  return (
    <section className="min-h-screen bg-linear-to-br from-gray-50 via-white to-amber-50/80 py-16 sm:py-20 lg:py-14 px-4 sm:px-6 lg:pb-24 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className=" w-full flex justify-center mb-8">
          <motion.div
            className="inline-block mx-auto"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-golden ease-in duration-300 hover:scale-105 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase border border-golden shadow-sm">
              The Zenora Experience
            </div>
          </motion.div>
        </div>
        {/* Main Heading */}
    
        <motion.div
          className="space-y-3 sm:space-y-4 text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-bold text-gray-900 leading-tight">
            <span className="block animate-slide-up">
              5 YEARS OF Personalized
            </span>
            <span className="block animate-slide-up text-transparent bg-clip-text bg-linear-to-r from-golden to-golden/90">
              Grooming for Men & Women
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-15 md:gap-8 lg:gap-16 items-center">
          {/* Left Side - Image Section */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Decorative Background Frame */}
            <div className="absolute -top-8 -left-8 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-amber-600/20 rounded-lg transform -rotate-6 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 border-2 border-golden rounded-lg transform rotate-6"></div>

            {/* Main Image Container */}
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  width={1260}
                  height={1260}
                  src={AboutHero}
                  alt="Professional barber cutting hair"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 lg:-right-6 right-4 bg-linear-to-br from-golden to-golden/90 text-white p-4 sm:p-6 rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.5, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold">+5</p>
                  <p className="text-xs sm:text-sm font-medium mt-1 opacity-90">
                    YEARS
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-200 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-amber-300 rounded-full blur-3xl opacity-40"></div>
          </motion.div>

          {/* Right Side - Content Section */}
          <motion.div
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Description Paragraphs */}
            <motion.div
              className="space-y-4 sm:space-y-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                For over 5 years, Zenora Unisex Salon has been a space where
                beauty, confidence, and self–care come together. We believe
                grooming is not just a service — it’s an experience that
                reflects your personality. At Zenora, we blend expertise with
                creativity to bring out the best version of you.
              </p>

              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
                As a unisex salon, Zenora proudly serves both men and women with
                the same level of care, luxury, and comfort. Our goal is simple
                — to redefine self-care with world-class services, premium
                products, and a warm, welcoming ambiance you’ll love returning
                to.
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative inline-block">
                <div className="mt-2">
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">
                    Mr. Shiv Sen
                  </p>
                  <p className="text-xs text-gray-400">
                    Master Barber & Founder
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            {location === "/" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link href={"/about-us"}>
                  <button className="group cursor-pointer w-full lg:w-auto justify-center bg-linear-to-r from-golden to-golden/90 hover:from-golden/90 hover:to-golden/90 text-white lg:mb-0 mb-3 px-6 sm:px-8 py-3 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-golden flex items-center space-x-2">
                    <span>Step Into Zenora</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        .signature-path {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: draw 2s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .signature-path {
            animation: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
