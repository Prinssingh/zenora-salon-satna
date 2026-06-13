"use client";

import React from "react";

export default function HairServicess() {
  const services = [
    {
      title: "HAIR CUT",
      items: [
        ["Hair Wash", "49/-"],
        ["Shave / Trim / Setting", "59/-"],
        ["Hair Cut Baby Boy", "69/-"],
        ["Hair Cut Male", "100/-"],
        ["Combo (Cut + Shave)", "149/-"],
        ["Combo + Wash", "199/-"],
      ],
    },
    {
      title: "HAIR POLISHING",
      items: [
        ["Basic Hair Spa (Loreal)", "349/- to 799/-"],
        ["Global Hair Color", "349/- to 799/-"],
        ["Hair Highlights", "599/- to 799/-"],
      ],
    },
    {
      title: "HAIR TREATMENT",
      items: [
        ["Keratine", "2499/- to 4499/-"],
        ["Straightening", "2999/- to 4999/-"],
      ],
    },
    {
      title: "HEAD MASSAGE",
      items: [
        ["Coconut Oil With Wash", "99/-"],
        ["Olive Oil With Wash", "149/-"],
      ],
    },
    {
      title: "D-TAN",
      items: [
        ["FACE D-TAN (REGULAR)", "149/-"],
        ["FACE D-TAN (O3+)", "199/-"],
        ["HAND D-TAN", "349/-"],
        ["LEG D-TAN", "599/-"],
        ["BODY D-TAN", "1999/-"],
      ],
    },
    {
      title: "EYEBROWS & WAXING",
      items: [
        ["EYEBROWS", "19/-"],
        ["HAND WAX", "399/-"],
        ["HALF LEG WAX", "399/-"],
        ["FRONT WAX", "499/-"],
        ["BACK WAX", "499/-"],
        ["FULL LEG WAX", "799/-"],
        ["BODY WAX", "1999/-"],
      ],
    },
  ];

  return (
    <section className=" text-white min-h-screen py-16 px-2 md:px-20 font-serif">
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-5">
        {services.map((section) => (
          <div key={section.title}>
            {/* Section Title */}
            <div className="relative ">
              <h2 className="text-2xl md:text-3xl font-extrabold border-b border-[#f5d27a] w-full py-1 text-[#f5d27a] uppercase  pb-1 tracking-wide">
                {section.title}
              </h2>
            </div>

            {/* Service List */}
            <ul className="mt-6 space-y-2 text-base md:text-lg">
              {section.items.map(([name, price]) => (
                <li
                  key={name}
                  className="flex justify-between items-center  pb-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#f5d27a] text-lg">•</span>
                    <span className="tracking-wide">{name}</span>
                  </div>
                  <span className=" font-medium">{price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* BODY POLISHING Single Line */}
      <div className="bg-gradient-to-r mx-auto max-w-5xl from-[#f5d27a] via-yellow-400 to-[#f5d27a] text-center py-2 rounded-sm">
        <h2 className="text-xl md:text-2xl font-bold tracking-wider text-black drop-shadow-lg flex justify-between px-2">
          <span>BODY POLISHING</span>
          <span>1799/-</span>
        </h2>
      </div>
    </section>
  );
}
