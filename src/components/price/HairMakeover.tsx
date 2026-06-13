import React from "react";
import PriceList from "./PriceList";

const HairMakeover: React.FC = () => {
  const packages = [
    {
      title: "PRE BRIDAL PACKAGE (6999/-)",
      items: [
        "O3+ Whitening Facial",
        "Oxy Bleech / D-Tan",
        "Body Polishing",
        "Full Body Wax",
        "Body Bleech",
        "Hair Spa",
        "Hair Trimming",
        "Threading, Upperlip, Forehead",
        "Pedicure / Manicure",
        "Hair Trimming",
      ],
    },
    {
      title: "PRE BRIDAL PACKAGE (9999/-)",
      items: [
        "Facial 2",
        "Bleech / D-Tan 2",
        "Body Polishing",
        "Body Wax",
        "Body Bleech",
        "Hair Spa 2",
        "Root Touch 1",
        "Threading, Upperlip, Forehead",
        "Manicure - Pedicure 2",
        "Hair Trimming",
      ],
    },
    {
      title: "PRE BRIDAL PACKAGE (11999/-)",
      items: [
        "Facial 3",
        "Bleech / D-Tan 3",
        "Body Polishing",
        "Body Wax",
        "Body Bleech",
        "Hair Spa 3",
        "Root Touch 1",
        "Threading, Upperlip, Forehead",
        "Manicure - Pedicure 3",
        "Hair Trimming",
      ],
    },
  ];

 
  const nailArt = [
    ["Gel Polish", "500/-"],
    ["Gel Art Polish", "800/-"],
    ["3D Nail", "600/-"],
    ["Nail Extention", "2000/-"],
  ];

  const hairExtension = [
    ["Per Stand 28 Inch", "400/-"],
    ["Per Stand 30 Inch", "500/-"],
    ["Per Stand 32 Inch", "600/-"],
  ];

  const extras = [
    ["Hair Style", "500/-"],
    ["Saree Draping", "200/-"],
    ["3d Nails", "500/-"],
  ];

  return (
    <div className="text-[#f5d27a] py-10 px-2 font-serif relative overflow-hidden">
      {/* Title */}
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-15 border-b-4 border-[#f5d27a] inline-block pb-2">
          Hair Makeover
        </h1>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 space-y-10">
        {/* Straightening / Smoothening */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b border-[#f5d27a] text-[#f5d27a] inline-block py-1">
            STRAIGHTENING / SMOOTHENING
          </h2>

          <ul className="space-y-2 text-lg text-gray-200">
            {[
              ["Neck", "2500/-"],
              ["Shoulder", "3000/-"],
              ["Mid Back", "4000/-"],
              ["Waist", "5000/-"],
            ].map(([name, price], i) => (
              <li key={`${name}-${i}`} className="flex justify-between">
                <span>{name}</span> <span>{price}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Keratine Treatment */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#f5d27a] inline-block py-1 border-b border-[#f5d27a]">
            KERATINE TREATMENT
          </h2>

          <ul className="space-y-2 text-lg text-gray-200">
            {[
              ["Neck", "3000/-"],
              ["Shoulder", "3500/-"],
              ["Mid Back", "4500/-"],
              ["Waist", "5500/-"],
            ].map(([name, price], i) => (
              <li key={`${name}-${i}`} className="flex justify-between">
                <span>{name}</span> <span>{price}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Botox Treatment */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#f5d27a] inline-block py-1 border-b border-[#f5d27a]">
            BOTOX TREATMENT
          </h2>

          <ul className="space-y-2 text-lg text-gray-200">
            {[
              ["Neck", "3000/-"],
              ["Shoulder", "3500/-"],
              ["Mid Back", "4500/-"],
              ["Waist", "5500/-"],
            ].map(([name, price], i) => (
              <li key={`${name}-${i}`} className="flex justify-between">
                <span>{name}</span> <span>{price}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Silk Treatment */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#f5d27a] inline-block py-1 border-b border-[#f5d27a]">
            SILK TREATMENT (NANOPLASTIA)
          </h2>

          <ul className="space-y-2 text-lg text-gray-200">
            {[
              ["Neck", "4000/-"],
              ["Shoulder", "4500/-"],
              ["Mid Back", "5500/-"],
              ["Waist", "6500/-"],
            ].map(([name, price], i) => (
              <li key={`${name}-${i}`} className="flex justify-between">
                <span>{name}</span> <span>{price}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* === Pre Bridal Packages === */}
      <div className="max-w-5xl  grid md:grid-cols-2 gap-8 space-y-10 mx-auto mt-16 ">
        {packages.map((pkg, idx) => (
          <div key={idx}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b border-[#f5d27a] text-[#f5d27a] inline-block py-1">
              {pkg.title}
            </h2>
            <ul className="space-y-2 text-lg text-gray-200">
              {pkg.items.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="flex items-center gap-2"
                >
                  <span className="text-[#f5d27a] text-lg">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-5xl  grid md:grid-cols-2 gap-8 space-y-10 mx-auto mt-16 ">
        <div className=" ">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b border-[#f5d27a] text-[#f5d27a] inline-block py-1">
            NAIL ART
          </h2>
          <ul className="space-y-2 text-lg text-gray-200">
            {nailArt.map(([name, price], i) => (
              <li key={`${name}-${i}`} className="flex justify-between">
                <span>{name}</span> <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* === Hair Extension === */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b border-[#f5d27a] text-[#f5d27a] inline-block py-1">
            HAIR EXTENSION
          </h2>
          <ul className="space-y-2 text-lg text-gray-200">
            {hairExtension.map(([name, price], i) => (
              <li key={`${name}-${i}`} className="flex justify-between">
                <span>{name}</span> <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* === Extras === */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b border-[#f5d27a] text-[#f5d27a] inline-block py-1">
            EXTRAS
          </h2>
          <ul className="space-y-2 text-lg text-gray-200">
            {extras.map(([name, price], i) => (
              <li key={`${name}-${i}`} className="flex justify-between">
                <span>{name}</span> <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PriceList />
    </div>
  );
};

export default HairMakeover;
