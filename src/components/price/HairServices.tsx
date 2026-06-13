import React from "react";

const PriceList: React.FC = () => {
  return (
    <div className="min-h-screen   text-[#f5d27a] lg:py-2 px-2 font-serif">
      <div className="mb-10">
        <h1 className="text-center  font-bold text-4xl sm:text-5xl md:text-6xl text-golden py-4 tracking-wide">
          Men’s & Womens
        </h1>
        <div className="flex justify-center">
          <div className="w-24 h-[2px] bg-golden mt-2 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Hair Cut */}
          <section>
            <h2 className="text-3xl font-bold border-b border-[#f5d27a] mb-4 pb-2">
              HAIR CUT
            </h2>
            <ul className="space-y-2 text-lg font-medium text-gray-200">
              <li className="flex justify-between">
                <span>Straight Cut</span> <span>100/-</span>
              </li>
              <li className="flex justify-between">
                <span>FRING (FLICK)</span> <span>100/-</span>
              </li>
              <li className="flex justify-between">
                <span>U - Shape Cut</span> <span>150/-</span>
              </li>
              <li className="flex justify-between">
                <span>V - Shape Cut</span> <span>150/-</span>
              </li>
              <li className="flex justify-between">
                <span>Blunt Cut</span> <span>200/-</span>
              </li>
              <li className="flex justify-between">
                <span>Inverted Blunt Cut</span> <span>250/-</span>
              </li>
              <li className="flex justify-between">
                <span>Feather Cut</span> <span>250/-</span>
              </li>
              <li className="flex justify-between">
                <span>Layer Cut</span> <span>300/-</span>
              </li>
              <li className="flex justify-between">
                <span>Long Layer Cut</span> <span>350/-</span>
              </li>
              <li className="flex justify-between">
                <span>Step’s Cut</span> <span>350/-</span>
              </li>
              <li className="flex justify-between">
                <span>Long Step’s Cut</span> <span>400/-</span>
              </li>
            </ul>
            <p className="text-sm mt-2 text-gray-400">
              Any Hair Cut With Wash + 50/-
            </p>
          </section>

          {/* Hair Spa */}
          <section>
            <h2 className="text-3xl font-bold border-b border-[#f5d27a] mb-4 pb-2">
              HAIR SPA
            </h2>
            <ul className="space-y-2 text-lg text-gray-200">
              <li className="flex justify-between">
                <span>Basic Spa</span> <span>1000/-</span>
              </li>
              <li className="flex justify-between">
                <span>Anti Dandruff Spa</span> <span>1200/-</span>
              </li>
              <li className="flex justify-between">
                <span>Anti Hair Fall Spa</span> <span>1200/-</span>
              </li>
              <li className="flex justify-between">
                <span>Keratine / Smoothening Spa</span> <span>1500/-</span>
              </li>
            </ul>
          </section>

          {/* Root Touch Up */}
          <section>
            <h2 className="text-3xl font-bold border-b border-[#f5d27a] mb-4 pb-2">
              ROOT TOUCH - UP
            </h2>
            <ul className="space-y-2 text-lg text-gray-200">
              <li className="flex justify-between">
                <span>Raaga</span> <span>450/- to 700/-</span>
              </li>
              <li className="flex justify-between">
                <span>Matrix</span> <span>450/- to 700/-</span>
              </li>
              <li className="flex justify-between">
                <span>Schwarzkopf</span> <span>500/- to 800/-</span>
              </li>
              <li className="flex justify-between">
                <span>L’oreal Color</span> <span>550/- to 900/-</span>
              </li>
              <li className="flex justify-between">
                <span>L’oreal Inoa</span> <span>600/- to 1000/-</span>
              </li>
            </ul>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Wash & Blow Dry */}
          <section>
            <h2 className="text-3xl font-bold border-b border-[#f5d27a] mb-4 pb-2">
              WASH & BLOW DRY
            </h2>
            <ul className="space-y-2 text-lg text-gray-200">
              <li className="flex justify-between">
                <span>Only Blow Dry</span> <span>150/-</span>
              </li>
              <li className="flex justify-between">
                <span>Only Head Wash & Conditioning</span> <span>200/-</span>
              </li>
              <li className="flex justify-between">
                <span>Wash & Conditioning With Blow Dry</span>{" "}
                <span>250/-</span>
              </li>
              <li className="flex justify-between">
                <span>
                  Head Wash + Deep Conditioning + Steam & Ultimate Blow Dry
                </span>
                <span>300/-</span>
              </li>
            </ul>
          </section>

          {/* Head Massage */}
          <section>
            <h2 className="text-3xl font-bold border-b border-[#f5d27a] mb-4 pb-2">
              HEAD MASSAGE
            </h2>
            <ul className="space-y-2 text-lg text-gray-200">
              <li className="flex justify-between">
                <span>Head Oil Massage</span> <span>250/-</span>
              </li>
              <li className="flex justify-between">
                <span>Head Oil Massage With Wash</span> <span>300/-</span>
              </li>
            </ul>
          </section>

          {/* Highlight */}
          <section>
            <h2 className="text-3xl font-bold border-b border-[#f5d27a] mb-4 pb-2">
              HIGH LIGHT
            </h2>
            <ul className="space-y-2 text-lg text-gray-200">
              <li className="flex justify-between">
                <span>Highlights Per Streak (Per Foil)</span> <span>250/-</span>
              </li>
              <li className="flex justify-between">
                <span>Crown Highlights (Per Foil)</span> <span>200/-</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
