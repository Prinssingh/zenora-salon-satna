"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Camera } from "lucide-react";
import Image from "next/image";

import { galleryImages, galleryStats } from "@/lib/data";

export default function BarbershopGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
useEffect(() => {
  if (selectedImage !== null) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}, [selectedImage]);

  // Use centralized data from data.ts
  const images = galleryImages;
  const stats = galleryStats;

  // Framer Motion variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative bg-linear-to-r from-golden via-golden to-golden text-white py-16  overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-2 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <div className="inline-block">
              <span className="bg-white duration-200 ease-in hover:scale-105 text-black px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase border border-golden shadow-sm flex items-center space-x-2 justify-center">
                <span>The Zenora Collection</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl  font-black uppercase leading-tight">
              Transformations & Styles
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white/90 to-white">
                By Zenora
              </span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto pt-4">
              From precision cuts to stylish transformations, Zenora brings your
              vision to life with care and expertise.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, duration: 0.8 },
              },
            }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-gray-800 backdrop-blur-sm border border-gray-700 rounded-xl hover:-translate-2 p-4 lg:p-6 text-center hover:bg-gray-800/90 hover:border-golden transition-all duration-300 group"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-golden group-hover:scale-110 transition-transform" />
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-2 py-12 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[250px] sm:auto-rows-[300px]"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className={`relative group cursor-pointer  overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${image.span}`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.url}
                alt={image.alt}
                height={500}
                width={500}
                className="w-full h-full object-cover transform lg:group-hover:scale-110  transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-lg mb-2">
                    {image.alt}
                  </p>
                  <div className="flex items-center gap-2 text-golden">
                    <Camera className="w-4 h-4" />
                    <span className="text-sm">View Full Image</span>
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-golden opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-golden opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Full Image View */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            aria-label="Close full image view"
            className="absolute top-4 right-4 text-white hover:text-golden transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            src={
              typeof galleryImages[selectedImage].url === "string"
                ? galleryImages[selectedImage].url
                : galleryImages[selectedImage].url.src
            }
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </motion.div>
      )}
    </div>
  );
}
