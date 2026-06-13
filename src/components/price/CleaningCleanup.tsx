"use client";
import React from "react";

const CleaningCleanup: React.FC = () => {
  return (
    <div className=" text-white px-2 py-10 font-serif">
      {/* Title */}

      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl text-[#c6a44d]  md:text-5xl  font-extrabold mb-15 border-b-4 border-[#f5d27a] inline-block  pb-2">
          CLEANING CLEAN-UP’S
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-5">
        {/* Regular Clean-Up Section */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-[#f5d27a] w-full py-1 text-[#c6a44d] mb-4">
            REGULAR CLEAN-UP
          </h2>
          <ul className="space-y-2 text-base">
            {[
              ["FACE WASH", "99/-"],
              ["REGULAR GEL CLEAN–UP", "249/-"],
              ["CLEANUP WITH FACE PACK", "449/-"],
              ["D–TAN WITH RUBBER MASK", "599/-"],
            ].map(([service, price], idx) => (
              <li key={idx} className="flex justify-between  pb-1">
                <span className="flex items-center gap-2">
                  <span className="text-[#c6a44d] text-lg">•</span> {service}
                </span>
                <span className="font-medium">{price}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Classic Clean-Up Section */}
        <section>
          <h2 className="text-2xl border-b border-[#f5d27a] w-full py-1 font-semibold text-[#c6a44d] mb-4">
            CLASSIC CLEAN-UP
          </h2>
          <ul className="space-y-2 text-base">
            {[
              ["SILVER", "599/-"],
              ["PEARL", "599/-"],
              ["TAN CLEAR", "599/-"],
              ["AROMA", "699/-"],
              ["GOLD", "749/-"],
              ["OXY BLAST", "899/-"],
              ["AROMA WHITENING", "999/-"],
              ["DIAMOND", "1299/-"],
            ].map(([service, price], idx) => (
              <li
                key={idx}
                className="flex justify-between pb-1"
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

export default CleaningCleanup;
