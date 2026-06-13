"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Femaleservices } from "@/lib/data";
import pic2 from "@/assets/home/price.png"
import pic3 from "@/assets/videogarrely/bride.png"

export default function FeamleBarbershopPricing() {
  return (
    <div className="min-h-screen relative bg-linear-to-br from-zinc-800 via-neutral-900 to-stone-900 text-white">
      <div className="container mx-auto px-4 sm:px-4 md:px-8 py-20 ">
        {/* Header */}
        <div className="space-y-3 mb-5">
          <div className=" flex justify-center">
            <span className="bg-golden hover:scale-105 duration-200 ease-in text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase border border-golden shadow-sm flex justify-center sm:justify-start items-center space-x-2">
              <span>Exclusive Services & Pricing</span>
            </span>
          </div>

          <h1 className="text-3xl text-center sm:text-4xl md:text-5xl  font-black uppercase leading-tight">
            Expert Hair &
            <br />
            <span className="text-golden">Beauty Packages for Women </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left side - Images */}
          <div className="relative  w-full lg:max-w-5xl max-w-xl mx-auto lg:mx-0">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Top left image */}
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={pic3.src}
                  alt="Barber styling client"
                  className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
              </motion.div>

              {/* Top right image */}
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 mt-6 sm:mt-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src={pic2.src}
                  alt="Barber trimming beard"
                  className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover border-4 border-golden"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute hidden md:block -bottom-4 -left-4 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-golden opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute hidden md:block -top-4 -right-4 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-golden opacity-20 blur-3xl rounded-full"></div>
          </div>

          {/* Right side - Pricing */}
          <div className="space-y-6  text-center lg:text-left">
            {/* Pricing Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-6">
              {Femaleservices.map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-black/60 backdrop-blur-xl  border border-gray-700 rounded-lg p-4 sm:p-5 hover:bg-black/80 hover:border-golden transition-all duration-300 hover:shadow-lg hover:shadow-golden/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex justify-between items-center gap-2 sm:gap-3">
                    <span className="text-gray-300 font-medium text-sm sm:text-base uppercase tracking-wide group-hover:text-white transition-colors">
                      {service.name}
                    </span>
                    <span className="text-golden font-bold text-base sm:text-lg lg:text-xl">
                      ₹{service.price}/-
                    </span>
                  </div>
                  <div className="h-0.5 bg-linear-to-r from-transparent via-gray-700 to-transparent mt-3 group-hover:via-golden transition-colors"></div>
                </motion.div>
              ))}
            </div>

            {/* Call to action */}
            <motion.div
              className="pt-6 text-center lg:text-end"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href={"/price"}>
                <button className="bg-golden lg:w-auto w-full cursor-pointer hover:bg-golden/90 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-golden/50">
                  Explore Full Price List
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute hidden md:block  top-20 left-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-golden opacity-80 blur-3xl rounded-full"></div>
      <div className="absolute hidden md:block  bottom-20 right-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-golden opacity-70 blur-3xl rounded-full"></div>
    </div>
  );
}
