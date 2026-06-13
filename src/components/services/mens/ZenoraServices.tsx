"use client";
import React, { useState } from "react";
import { Scissors, Sparkles, Check } from "lucide-react";
import { serviceCategoryItems } from "@/lib/data";





const ZenoraServices: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Use centralized data from data.ts
  const serviceCategories = serviceCategoryItems;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section with Model */}
      <div className="relative bg-gradient-to-r from-rose-100 via-pink-50 to-rose-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-6 z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Premium Hair
                <span className="block bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Experience luxury grooming with our comprehensive range of
                professional hair services
              </p>
              <button className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Book Appointment
              </button>
            </div>

            {/* Model Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-rose-200 to-pink-200 rounded-3xl h-96 lg:h-[500px] flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="text-center p-8">
                  <Scissors className="w-24 h-24 mx-auto mb-4 text-rose-400" />
                  <p className="text-gray-600 text-lg">
                    Professional Hair Styling
                  </p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-rose-400 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive grooming solutions for the modern gentleman
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Category Header */}
              <div
                className={`bg-gradient-to-r ${category.color} p-6 text-white`}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                    <category.icon className="w-6 h-6 " />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center">
                  {category.title}
                </h3>
              </div>

              {/* Services List */}
              <div className="p-6 space-y-3">
                {category.services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div
                      className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <button
                  className={`w-full py-3 rounded-lg bg-gradient-to-r ${category.color} text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section with Second Model */}
      <div className="relative bg-gradient-to-r from-gray-100 via-rose-50 to-gray-100 overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Model Image Placeholder */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-gray-200 to-rose-200 rounded-3xl h-96 lg:h-[500px] flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="text-center p-8">
                  <Sparkles className="w-24 h-24 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600 text-lg">Expert Beard Styling</p>
                </div>
              </div>
            </div>

            {/* CTA Content */}
            <div className="text-center lg:text-left space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transform Your Look
                <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  With Expert Care
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Our professional stylists use premium products and techniques to
                deliver exceptional results tailored to your unique style
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Book Now
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "5000+", label: "Happy Clients" },
              { number: "15+", label: "Expert Stylists" },
              { number: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZenoraServices;
