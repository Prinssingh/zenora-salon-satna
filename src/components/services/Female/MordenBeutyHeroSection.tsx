"use client";
import React from "react";
import { Scissors, ChevronDown, Star, Shield, Sparkles } from "lucide-react";
import { features, stats } from "@/lib/data";

const MordenBeutyHeroSection: React.FC<{ hero: string }> = ({ hero }) => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hero})`,
          transform: `translateY(₹
          {scrollY * 0.5}px)`,
        }}
      >
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(217, 119, 6, 0.1) 35px, rgba(217, 119, 6, 0.1) 70px)`,
          }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-[calc(100vh-88px)] flex items-center">
        <div className="max-w-7xl mx-auto px-2 mt-10 sm:px-4 lg:px-8 py-20 lg:py-22 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div
                className={`inline-flex items-center space-x-2 bg-golden/20 backdrop-blur-md border border-golden/30 text-golden px-4 py-2 rounded-full transition-all duration-1000 ₹
{
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-semibold">
                  Luxury Grooming, Perfected Since 2021
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight transition-all duration-1000 delay-200 ₹
{
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <span className="block">The Art of </span>

                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-golden via-golden to-golden mt-2">
                    Bridal & Party Makeover
                  </span>
                </h1>

                <p
                  className={`text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl transition-all duration-1000 delay-400 ₹
{
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  From timeless bridal elegance to dazzling party glam, Zenora
                  specializes in bespoke makeovers crafted for women who desire
                  perfection on their special day.
                </p>
              </div>

              {/* Feature Pills */}
              <div
                className={`flex flex-wrap gap-4 transition-all duration-1000 delay-600 ₹
{
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl hover:bg-white/20 hover:border-golden/50 transition-all duration-300 group"
                  >
                    <feature.icon className="w-5 h-5 text-golden group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div
                className={`flex items-center space-x-6 pt-6 border-t border-white/10 transition-all duration-1000 delay-1000 ₹
{
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-golden" />
                  <span className="text-sm text-gray-400">
                    Licensed & Insured
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-golden" />
                  <span className="text-sm text-gray-400">Award Winning</span>
                </div>
              </div>
            </div>

            {/* Right Content - Stats Card */}
            <div
              className={`hidden lg:block transition-all duration-1000 delay-500 ₹
{
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-golden/20 to-golden/20 rounded-3xl blur-2xl"></div>

                {/* Stats Card */}
                <div className="relative bg-black/40 backdrop-blur-xl border border-golden/20 rounded-3xl p-8 space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Why Brides & Divas Choose Us
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-golden to-golden mx-auto"></div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="text-center group">
                        <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-golden to-golden mb-2 group-hover:scale-110 transition-transform duration-300">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-400 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-golden fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      "The attention to detail and artistry at Zenora is
                      unmatched. This is where brides and divas come for the
                      ultimate makeover experience."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-golden to-golden rounded-full flex items-center justify-center text-white font-bold">
                        RS
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">
                          Ruhi Singh
                        </p>
                        <p className="text-gray-400 text-xs">Regular Client</p>
                      </div>
                    </div>
                  </div>

                  {/* Services Preview */}
                  <div className="space-y-3">
                    {[
                      {
                        icon: Scissors,
                        text: "Nail Art",
                        price: "₹500+",
                      },

                      { icon: Star, text: "Hair Styling", price: "₹250+" },
                      {
                        icon: Sparkles,

                        text: "Pedicure",
                        price: "₹400+",
                      },
                    ].map((service, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <service.icon className="w-5 h-5 text-golden group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-white font-medium">
                            {service.text}
                          </span>
                        </div>
                        <span className="text-golden font-bold">
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8  left-1/2 transform -translate-x-1/2 z-20 hidden lg:block animate-bounce">
        <button
          onClick={scrollToContent}
          className="flex flex-col cursor-pointer items-center space-y-2 text-white/60 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-xs font-medium uppercase tracking-wider">
            Explore More
          </span>
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Floating Elements - Decorative */}
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-golden/10 rounded-full blur-3xl animate-pulse hidden xl:block"></div>
      <div className="absolute top-40 left-20 w-40 h-40 bg-golden/10 rounded-full blur-3xl animate-pulse delay-1000 hidden xl:block"></div>
    </div>
  );
};

export default MordenBeutyHeroSection;
