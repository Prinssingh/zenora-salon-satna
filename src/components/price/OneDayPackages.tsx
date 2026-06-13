"use client";
import React from "react";

const OneDayPackages: React.FC = () => {
  return (
    <div className="  text-white px-2 py-10 font-serif">
      {/* One Day Regular */}
      <section className="mb-10 ">
        <h1 className="text-center text-3xl font-bold text-[#c6a44d] uppercase mb-6 tracking-wide">
          One Day ( Regular )
        </h1>

        <div className="border  border-[#c6a44d] rounded-md p-6 max-w-5xl mx-auto shadow-lg">
          <ul className="space-y-2 text-base mb-6">
            {[
              "COMBO (CUT + SHAVE)",
              "HAIR COLOR",
              "D-TAN",
              "FACIAL (O3+ WHITENING)",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-[#c6a44d] text-lg">•</span> {item}
              </li>
            ))}
          </ul>
          <div className="text-right text-xl font-medium text-[#c6a44d]">
            2999/-
          </div>
        </div>
      </section>

      {/* One Day Premium */}
      <section>
        <h1 className="text-center text-3xl font-bold text-[#c6a44d] uppercase mb-6 tracking-wide">
          One Day ( Premium )
        </h1>

        <div className="border border-[#c6a44d] rounded-md p-6 max-w-5xl mx-auto shadow-lg">
          <ul className="space-y-2 text-base mb-6">
            {[
              "COMBO (CUT + SHAVE)",
              "HAIR COLOR",
              "D-TAN O3+",
              "FACIAL (O3+ WHITENING)",
              "MANICURE (ANTI TAN)",
              "PEDICURE (ANTI TAN)",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-[#c6a44d] text-lg">•</span> {item}
              </li>
            ))}
          </ul>
          <div className="text-right text-xl font-medium text-[#c6a44d]">
            5999/-
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneDayPackages;
