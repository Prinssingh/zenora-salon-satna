import React from "react";

const GlobalHairColor: React.FC = () => {
  return (
    <div className=" text-[#f5d27a] py-10 px-2 font-serif  relative overflow-hidden">
      {/* Title */}

      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl   md:text-5xl  font-extrabold mb-15 border-b-4 border-[#f5d27a] inline-block  pb-2">
          GLOBAL HAIR COLOR
        </h1>
      </div>
      <div className="max-w-5xl  mx-auto grid md:grid-cols-2 gap-8 space-y-10">
        {/* L'Oreal Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b border-[#f5d27a]">
            L’OREAL COLOR
          </h2>
          <ul className="space-y-2 text-lg text-gray-200">
            <li className="flex justify-between font-medium">
              <span>Neck</span> <span>2000/-</span>
            </li>
            <li className="flex justify-between">
              <span>Shoulder</span> <span>2500/-</span>
            </li>
            <li className="flex justify-between">
              <span>Mid Back</span> <span>3500/-</span>
            </li>
            <li className="flex justify-between">
              <span>Below Waist</span> <span>4000/-</span>
            </li>
          </ul>
        </section>

        {/* Schwarzkopf Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b border-[#f5d27a]">
            SCHWARZKOPF
          </h2>

          <ul className="space-y-2 text-lg font-medium text-gray-200">
            <li className="flex justify-between">
              <span>Neck</span> <span>2500/-</span>
            </li>
            <li className="flex justify-between">
              <span>Shoulder</span> <span>3000/-</span>
            </li>
            <li className="flex justify-between">
              <span>Mid Back</span> <span>3500/-</span>
            </li>
            <li className="flex justify-between">
              <span>Below Waist</span> <span>4000/-</span>
            </li>
          </ul>
        </section>
        {/* Ammonia Free Section */}
        <section>
          <div className="w-full max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b border-[#f5d27a]">
              AMMONIA FREE
            </h2>
          </div>

          <ul className="space-y-2 text-lg font-medium text-gray-200">
            <li className="flex justify-between">
              <span>Neck</span> <span>2500/-</span>
            </li>
            <li className="flex justify-between">
              <span>Shoulder</span> <span>3000/-</span>
            </li>
            <li className="flex justify-between">
              <span>Mid Back</span> <span>3500/-</span>
            </li>
            <li className="flex justify-between">
              <span>Waist</span> <span>4500/-</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default GlobalHairColor;
