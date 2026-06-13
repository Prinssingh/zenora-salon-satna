"use client";
import React from "react";

const GlowingFacial: React.FC = () => {
  return (
    <div className=" text-white px-2 py-10 font-serif">
      {/* Main Title */}

      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl text-[#c6a44d]  md:text-5xl  font-extrabold mb-15 border-b-4 border-[#f5d27a] inline-block  pb-2">
          Glowing Facial
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-5">
        {/* Regular Facial Section */}
        <section>
          <h2 className="text-2xl md:text-3xl  font-semibold border-b border-[#f5d27a] w-full py-1 text-[#c6a44d] mb-4">
            Regular Facial
          </h2>
          <ul className="space-y-2 text-base">
            {[
              ["FRUIT FACIAL", "799/-"],
              ["PAPAYA FACIAL", "799/-"],
              ["UBTAN", "799/-"],
              ["VITAMIN C", "799/-"],
              ["WHITENING", "799/-"],
              ["NATURE GOLD", "999/-"],
              ["NATURS DIAMOND", "1299/-"],
            ].map(([service, price], idx) => (
              <li
                key={idx}
                className="flex justify-between  pb-1"
              >
                <span className="flex items-center gap-2">
                  <span className="text-[#c6a44d] text-lg">•</span> {service}
                </span>
                <span className="font-medium">{price}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Premium Facial Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold border-b border-[#f5d27a] w-full py-1 text-[#c6a44d] mb-4">
            Premium Facial
          </h2>
          <ul className="space-y-2 text-base">
            {[
              ["BLOSSOM KOCHAR SILVER", "1299/-"],
              ["BLOSSOM KOCHAR GOLD", "1399/-"],
              ["BLOSSOM KOCHAR DIAMOND", "1499/-"],
              ["O3+ BASIC", "1599/-"],
              ["O3+ WHITENING", "1999/-"],
              ["O3+ SEA WEED", "1999/-"],
              ["O3+ OXYGEN", "1299/-"],
              ["O3+ REDIANT", "2499/-"],
              ["O3+ VITAMIN C", "2499/-"],
              ["O3+ DIAMOND", "2999/-"],
            ].map(([service, price], idx) => (
              <li
                key={idx}
                className="flex justify-between  pb-1"
              >
                <span className="flex items-center gap-2">
                  <span className="text-[#c6a44d] text-lg">•</span> {service}
                </span>
                <span className="font-medium">{price}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default GlowingFacial;
