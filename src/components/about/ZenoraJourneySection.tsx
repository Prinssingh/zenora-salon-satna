"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Heart,
  Award,
  MapPin,
  Users,
  Star,
  Sparkles,
  CheckCircle,
} from "lucide-react";

import images from "@/assets/male/hero1.png";
import { timelineEvents } from "@/lib/data";
import pic1 from "@/assets/journeychapters/pic1.jpeg"
import pic2 from "@/assets/journeychapters/pic2.jpeg"

const ZenoraJourneySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const journeyChapters = [
    {
      years: "2021 - 2022",
      title: "The Beginning",
      icon: Calendar,
      image: pic1.src,
      imageCaption: "Our humble beginnings - 2021",
      description: [
        "Four years ago, Zenora began as a modest neighborhood barbershop with a bold vision. Founded in a small yet stylish space, we started with just two chairs and an unwavering commitment to excellence. From the very first day, our goal was clear—to deliver not just haircuts, but experiences that made every client feel confident and renewed.",
        "Those early days were filled with dedication, passion, and building trust one client at a time. Word quickly spread about our attention to detail and the personalized care that defined the Zenora experience.",
      ],
      highlights: [
        { icon: Users, text: "Founded in 2021" },
        { icon: MapPin, text: "Local neighborhood beginnings" },
        { icon: Heart, text: "Built on personal care and trust" },
      ],
    },
    {
      years: "2022 - 2023",
      title: "Our Philosophy",
      icon: Heart,
      image: pic2.src,
      imageCaption:
        "Zenora’s philosophy of luxury, comfort & personalized care",
      description: [
        "As Zenora Unisex Salon grew, our philosophy evolved into something deeper — beauty is not just a service; it’s a feeling. We believe every client deserves personalized attention, genuine care, and an experience that enhances confidence from within.",
        "To achieve this, we blended global grooming trends with our signature touch of hospitality. Our interiors were thoughtfully redesigned to create a warm, luxurious, and calming space for both men and women — premium seating, soothing ambiance, and an environment that reflects elegance in every detail.",
      ],
      features: [
        { icon: Sparkles, label: "Premium Products" },
        { icon: Heart, label: "Personalized Care" },
        { icon: Award, label: "Skilled & Certified Experts" },
        { icon: Star, label: "Luxury Experience for All" },
      ],
    },
    {
      years: "2023 - 2025",
      title: "Present Day",
      icon: Star,
      image: images.src,
      imageCaption:
        "Zenora – Crafting premium grooming experiences for both men & women",
      description: [
        "Today, Zenora Unisex Salon stands as one of the most trusted names in modern grooming for both men and women. In just four remarkable years, we have built a loyal community that chooses Zenora for our quality, comfort, and personalized care. Many clients who walked in during our early days still return—because they feel the difference.",
        "With a highly skilled team, advanced techniques, and collaborations with top professional brands, Zenora continues to elevate the grooming experience. Every service we offer is crafted to be precise, soothing, and tailored to your unique style.",
      ],
      achievements: [
        'Recognized locally as a "Top Premium Unisex Salon"',
        "Serving hundreds of happy clients every month",
        "Introducing new luxury grooming and self-care services",
        "Known for excellence, hospitality, and customer-first experience",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen  bg-gradient-to-br from-zinc-800 via-neutral-900 to-stone-900 text-white py-16  px-2 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute hidden md:block inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-golden/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[600px] border border-golden/10 rounded-full"></div>
          <div className="absolute inset-0 w-[700px] h-[700px] border border-golden/5 rounded-full"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-6">
            <div className="bg-golden ease-in  px-10 duration-300 hover:scale-105 text-white  py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase border border-golden shadow-sm flex items-center justify-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Our Story
              </span>
            </div>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl  font-bold leading-tight mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span>
              THE JOURNEY OF{" "}
              <span className=" mt-2 text-transparent bg-clip-text bg-gradient-to-r from-golden to-golden">
                ZENORA
              </span>
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            From humble roots to the city’s top luxury unisex beauty & grooming
            destination.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-golden to-transparent mx-auto mt-6"></div>
        </div>

        <div className="mb-10">
          {journeyChapters.map((chapter, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2  mb-20 gap-8 lg:gap-12 items-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : index % 2 === 0
                  ? "opacity-0 -translate-x-10"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {/* Image */}
              <div
                className={`relative group  ${
                  index % 2 === 0 ? "order-1 lg:order-2" : "order-1"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-golden to-golden rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl  overflow-hidden shadow-2xl border-4 border-golden/30 transform group-hover:scale-[1.02] transition-all duration-500">
                  <img
                    src={chapter.image}
                    alt={chapter.title}
                    className="w-full h-auto aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-sm sm:text-base font-medium">
                      {chapter.imageCaption}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 0 ? "order-2 lg:order-1" : "order-2"
                }`}
              >
                <div className="flex items-center space-x-3 ">
                  <div className="w-12 h-12 bg-gradient-to-br from-golden to-golden rounded-xl flex items-center justify-center shadow-xl">
                    <chapter.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-golden text-sm font-semibold">
                      {chapter.years}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold">
                      {chapter.title}
                    </h3>
                  </div>
                </div>

                <div className="h-1 w-16 bg-gradient-to-r from-golden to-transparent"></div>

                {chapter.description.map((para, i) => (
                  <p
                    key={i}
                    className={`${
                      i === 0
                        ? "text-gray-300 text-base sm:text-lg leading-relaxed"
                        : "text-gray-400 text-sm sm:text-base leading-relaxed"
                    }`}
                  >
                    {para}
                  </p>
                ))}

                {/* Highlights / Features / Achievements */}
                {chapter.highlights && (
                  <div className="flex flex-wrap gap-4 pt-4">
                    {chapter.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10"
                      >
                        <item.icon className="w-4 h-4 text-golden" />
                        <span className="text-sm text-gray-300">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {chapter.features && (
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {chapter.features.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-golden/50 transition-all duration-300 group/card"
                      >
                        <item.icon className="w-6 h-6 text-golden mb-2 group-hover/card:scale-110 transition-transform duration-300" />
                        <p className="text-sm font-medium text-gray-300">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {chapter.achievements && (
                  <div className="space-y-3 pt-4">
                    {chapter.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-golden flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm sm:text-base">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Our Journey Timeline
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute  top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-golden via-amber-500 to-golden transform -translate-y-1/2"></div>

            {/* Timeline Events */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative">
                  {/* Vertical Line for Mobile */}
                  <div className="lg:hidden absolute left-6 top-12 bottom-0 w-0.5 bg-golden/30"></div>

                  <div className="relative group">
                    {/* Node */}
                    <div className="flex lg:flex-col  items-center lg:items-center mb-10">
                      <div className="relative z-10 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-golden to-golden rounded-full flex items-center justify-center shadow-xl group-hover:scale-125 transition-all duration-300">
                        <event.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div className="ml-4 lg:ml-0 lg:mt-4 text-left lg:text-center">
                        <div className="text-2xl lg:text-3xl font-bold text-golden">
                          {event.year}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white/5  backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-golden/50 transition-all duration-300 ml-16 lg:ml-0">
                      <h4 className="font-bold text-white mb-1 text-sm lg:text-base">
                        {event.title}
                      </h4>
                      <p className="text-xs lg:text-sm text-gray-400">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute hidden md:block top-20 left-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-golden opacity-80 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 hidden md:block right-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-golden opacity-70 blur-3xl rounded-full"></div>
    </section>
  );
};

export default ZenoraJourneySection;
