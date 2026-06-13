"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {  homeservice } from "@/lib/data";
interface ServicesSectionProps {
  FemaleSer: any;
}
const ServicesSection: React.FC<ServicesSectionProps> = ({ FemaleSer }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="min-h-screen relative bg-linear-to-br from-zinc-800 via-neutral-900 to-stone-900 py-16  px-2 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-block">
            <span className="bg-golden duration-300 ease-in hover:scale-105 block text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase border border-golden shadow-sm">
              Hair & Beauty Services
            </span>
          </div>

          <h2 className="text-3xl z-10 mt-3 relative sm:text-4xl lg:text-5xl  font-bold text-white leading-tight px-4">
            <span className="block">THE BEST STYLING SERVICES</span>
            <span className="block mt-1">FOR YOUR BEAUTY</span>
          </h2>

          <div className="w-20 h-1 bg-linear-to-r from-transparent via-golden to-transparent mx-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8">
          
            <>
              {homeservice.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {/* Card */}
                  <div className="relative cursor-pointer bg-white rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                    {/* Decorative Dots Pattern */}
                    <div className="absolute top-6 right-6 grid grid-cols-6 gap-1 opacity-20">
                      {[...Array(24)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 bg-amber-500 rounded-full"
                        ></div>
                      ))}
                    </div>

                    {/* Animated Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    {/* Icon */}
                    <div className="relative mb-6 sm:mb-8">
                      <div
                        className={`inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 ${service.iconBg} rounded-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <service.icon
                          className={`w-10 h-10 sm:w-12 sm:h-12 ${service.iconColor}`}
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Floating Badge */}
                      <div
                        className={`absolute -top-2 -right-2 bg-golden text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform transition-all duration-500 ${
                          hoveredCard === service.id
                            ? "scale-110 rotate-12"
                            : "scale-100 rotate-0"
                        }`}
                      >
                        {service.price}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-golden transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-600    lg:h-22  text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>

                      {/* Read More Link */}
                     
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 z-10 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-golden to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-golden rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                </motion.div>
              ))}
            </>

        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute hidden md:block z-0 top-20 left-10 w-40 h-40 bg-golden opacity-80 blur-3xl rounded-full"></div>
      <div className="absolute hidden md:block z-0 bottom-20 right-10 w-40 h-40 bg-golden opacity-70 blur-3xl rounded-full"></div>
    </section>
  );
};

export default ServicesSection;
