"use client";
import React, { useState, useEffect } from "react";
import {
  Camera,
  Sparkles,
  Layout,
  Volume2,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Maximize2,
} from "lucide-react";
import { GalleryItem } from "@/lib/types";
import { categories, galleryItems } from "@/lib/data";

const ZenoraAmbianceSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
        : (currentIndex + 1) % filteredItems.length;

    setCurrentIndex(newIndex);
    setSelectedItem(filteredItems[newIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox("prev");
      if (e.key === "ArrowRight") navigateLightbox("next");
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isLightboxOpen, currentIndex]);

  return (
    <section className="relative min-h-screen bg-linear-to-br from-gray-50 via-gray-100 to-amber-100/30 py-16  px-2 sm:px-4 lg:px-8">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-golden/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-golden/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 ">
          <div className="inline-block mb-4">
            <div className="bg-golden ease-in duration-300 hover:scale-105 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase border border-golden shadow-sm flex items-center justify-center space-x-2">
              <Camera className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Ambiance Preview
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            <span className="">
              INSIDE{" "}
              <span className=" text-transparent bg-clip-text bg-linear-to-r from-golden to-golden">
                ZENORA
              </span>
            </span>
          </h2>

          <p className="text-gray-700 text-base sm:text-lg  max-w-3xl mx-auto leading-relaxed font-medium mb-2">
            Zenora combines sophisticated interiors with a serene atmosphere, creating the perfect space for both men and women to enjoy expert grooming and style.
          </p>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our luxurious facilities and experience the ambiance that
            sets us apart
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-transparent via-golden to-transparent mx-auto mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group flex items-center cursor-pointer space-x-2 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? "bg-linear-to-r from-golden to-golden text-white shadow-lg shadow-golden/50"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-golden"
              }`}
            >
              <category.icon
                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  selectedCategory === category.id
                    ? "text-white"
                    : "text-golden"
                }`}
              />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item, index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-gray-900">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

               

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-90">
                  <ZoomIn className="w-5 h-5 text-gray-800" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-golden text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {[
            {
              icon: Sparkles,
              title: "Premium Interiors",
              description: "Meticulously designed spaces with luxury finishes",
            },
            {
              icon: Volume2,
              title: "Ambient Sound",
              description: "Curated playlists for a relaxing atmosphere",
            },
            {
              icon: Camera,
              title: "Modern Equipment",
              description: "Latest grooming technology and tools",
            },
            {
              icon: Layout,
              title: "Spacious Layout",
              description: "Comfortable spacing ensuring privacy",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border border-[0.5px] border-gray-200 hover:border-golden group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-amber-100 to-golden rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-golden" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-golden transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          {/* Close Button */}
          <button
            aria-label="Close lightbox"
            title="Close lightbox"
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-50 group"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Navigation Arrows */}
          <button
            aria-label="Previous image"
            title="Previous image"
            onClick={() => navigateLightbox("prev")}
            className="absolute left-4 sm:left-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-50"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            aria-label="Next image"
            title="Next image"
            onClick={() => navigateLightbox("next")}
            className="absolute right-4 sm:right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-50"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
           

          {/* Image Container */}
          <div className="relative max-w-6xl max-h-[90vh] mx-4 sm:mx-6">
            <img
              src={selectedItem.src}
              alt={selectedItem.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />

            {/* Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 to-transparent p-6 rounded-b-lg">
              <span className="inline-block bg-golden text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                {selectedItem.category}
              </span>
              <h3 className="text-white font-bold text-xl sm:text-2xl mb-1">
                {selectedItem.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {selectedItem.description}
              </p>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentIndex + 1} / {filteredItems.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default ZenoraAmbianceSection;
