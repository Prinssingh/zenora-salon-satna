"use client";

import { Check, Clock, Heart, Scissors, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
// import { Scissors, Heart, Check, Star, Clock } from "lucide-react";


interface ServiceCategoriesOverviewProps {
  data: any[]; 
}


const ServiceCategoriesOverview: React.FC<ServiceCategoriesOverviewProps> = ({
  data,
}) => {
    const infos = [
      { icon: Star, title: "Top Rated", desc: "5-star service" },
      { icon: Clock, title: "Flexible Hours", desc: "Open 7 days" },
      { icon: Check, title: "Walk-ins Welcome", desc: "Or book ahead" },
      { icon: Heart, title: "Member Perks", desc: "Special benefits" },
    ];
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50 py-16  px-2 sm:px-4 lg:px-8">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-golden/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-golden/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <div className="bg-golden ease-in duration-300 hover:scale-105 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase border border-golden shadow-sm flex items-center justify-center space-x-2">
              <Scissors className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Our Services
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4">
            <span className="block">EXPLORE OUR</span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-golden to-golden">
              SERVICE CATEGORIES
            </span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Discover the perfect grooming experience tailored to your needs
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-transparent via-golden to-transparent mx-auto mt-6"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {data.map((category, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative h-full bg-white rounded-2xl   transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-[0.5px] border-gray-300">
                {/* Popular Badge */}
                {category.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center space-x-1 bg-golden text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Popular</span>
                    </div>
                  </div>
                )}

                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    height={400}
                    width={400}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />


                  {/* Price & Duration Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      <p className="text-xs text-gray-600 font-medium">
                        Starting at
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        {category.startingPrice}
                      </p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-golden" />
                      <span className="text-sm font-semibold text-gray-900">
                        {category.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl uppercase font-bold text-gray-900 group-hover:text-golden transition-colors duration-300">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>

                  {/* Services List */}
                  <div className="space-y-2 pt-2">
                    {category.services.map((service : any, ) => (
                      <div
                        key={`${category.title}-${service}`} // ✅ unique + stable key
                        className="flex items-center space-x-2 text-sm"
                      >
                        <Check className="w-4 h-4 text-golden flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {/* <button className="group/btn w-full flex items-center justify-center space-x-2 bg-linear-to-r from-gray-900 to-gray-800 hover:from-golden hover:to-golden text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg mt-6">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </button> */}
                </div>

                {/* Hover Border Effect */}
                <div
                  className={`absolute inset-0 border-[0.5px] border-transparent group-hover:border-golden/50 rounded-2xl transition-all duration-500 pointer-events-none`}
                ></div>
              </div>

              {/* Decorative Glow */}
              <div
                className={`absolute -inset-2 bg-linear-to-r ${category.linear} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10 rounded-2xl`}
              ></div>
            </div>
          ))}
        </div>

        {/* Additional Info Bar */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {infos.map((info, idx) => {
            const Icon = info.icon; // ✅ Extract icon to a variable
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-[0.5px] border-gray-200 group hover:border-golden"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-linear-to-br from-golden to-golden/90 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />{" "}
                    {/* ✅ Use variable */}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-sm text-gray-600">{info.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategoriesOverview;
