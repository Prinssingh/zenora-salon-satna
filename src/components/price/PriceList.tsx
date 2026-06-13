"use client";

import React from "react";

export default function PriceList() {
  const sections = [
    {
      title: "NORMAL WAX",
      items: [
        ["Under Arms", "50/-"],
        ["Full Arms", "200/-"],
        ["Full Arms with Under Arms", "250/-"],
        ["Half Leg", "250/-"],
        ["Full Leg", "400/-"],
        ["Stomach", "150/-"],
        ["Half Back", "150/-"],
        ["Full Back", "250/-"],
        ["Full Body", "1000/-"],
      ],
    },
    {
      title: "RICA / OIL WAX",
      items: [
        ["Under Arms", "80/-"],
        ["Full Arms", "350/-"],
        ["Face", "400/-"],
        ["Full Arms with Under Arms", "450/-"],
        ["Half Leg", "350/-"],
        ["Full Leg", "550/-"],
        ["Stomach", "300/-"],
        ["Full Back", "400/-"],
        ["Full Body", "1800/-"],
      ],
    },
    {
      title: "MANICURE",
      items: [
        ["Manicure (Simple)", "300/-"],
        ["Manicure with D-Tan", "400/-"],
        ["Lotus / VLCC", "400/-"],
        ["Advance / Jelly", "500/-"],
        ["Spa Manicure", "700/-"],
      ],
    },
    {
      title: "PEDICURE",
      items: [
        ["Pedicure (Simple)", "400/-"],
        ["Pedicure with Toe D-Tan", "700/-"],
        ["Lotus / VLCC", "500/-"],
        ["Advance / Jelly", "700/-"],
        ["Spa Pedicure O3+", "1000/-"],
      ],
    },
    {
      title: "BODY POLISH",
      items: [
        ["Normal Body Polish", "1500/-"],
        ["Spa Body Polish", "2000/-"],
        ["Crystal Body Polish", "2500/-"],
        ["Premium Body Polish", "3000/-"],
      ],
    },
    {
      title: "BODY SPA",
      items: [
        ["Body Spa", "1500/-"],
        ["Body Spa With Oil", "2000/-"],
        ["Crystal Body Spa (PREMIUM)", "2500/-"],
        ["Oil with Steam Body Spa", "2500/-"],
      ],
    },
    {
      title: "BODY BLEECH",
      items: [
        ["Oxy Face Bleech", "250/-"],
        ["Ozone", "250/-"],
        ["Diamond", "250/-"],
        ["Full Hand", "400/-"],
        ["Full Leg", "600/-"],
        ["Stomach & Back", "600/-"],
        ["Body Bleech", "1500/-"],
      ],
    },
    {
      title: "D-TAN",
      items: [
        ["Raaga", "200/-"],
        ["Ozon", "250/-"],
        ["O3+", "300/-"],
      ],
    },
    {
      title: "FACIAL",
      items: [
        ["Fruit Facial", "500/-"],
        ["Lotus Facial", "700/-"],
        ["Lotus Hydra Vitals", "800/-"],
        ["Lotus Pura", "800/-"],
        ["Vedic Line Diamond", "1500/-"],
        ["Vedic Line Mint", "700/-"],
        ["Vedic Line Gold", "1200/-"],
        ["Wine Facial", "700/-"],
      ],
    },
    {
      title: "CLEAN-UP",
      items: [
        ["Fruit", "200/-"],
        ["Mint", "300/-"],
        ["Charcoal", "300/-"],
        ["Vitamin C", "350/-"],
        ["Diamond", "400/-"],
        ["Ubtan", "350/-"],
        ["Wine", "400/-"],
        ["Gold Clean-Up", "500/-"],
        ["O3+ Whitening", "700/-"],
      ],
    },
    {
      title: "BLOSSOM KOCHHAR",
      items: [
        ["Skin Glow", "700/-"],
        ["Bridal Glow", "900/-"],
        ["Pearl", "900/-"],
        ["Silver", "900/-"],
        ["Gold", "1000/-"],
        ["Diamond", "1200/-"],
      ],
    },
    {
      title: "PACK & MASK",
      items: [
        ["O3+", "250/-"],
        ["Sheet Mask", "200/-"],
        ["Gel Mask (For Pimple)", "300/-"],
        ["Vitamin E-Mask", "100/-"],
        ["Cloud Mask", "100/-"],
        ["Casmara (Anti Oxident)", "250/-"],
        ["Peel Off Mask", ""],
      ],
    },
    {
      title: "O3+ PROFESSIONAL",
      items: [
        ["O3+ Whitening", "1300/-"],
        ["O3+ Power Whitening", "1500/-"],
        ["O3+ Tightening Facial Kit", "1700/-"],
        ["O3+ Vitamin C", "2000/-"],
        ["O3+ Vitamin E", "2000/-"],
        ["O3+ Bridal Glow Facial", "2200/-"],
        ["O3+ Luxury Diamond", "2500/-"],
      ],
    },
    {
      title: "ORGANIC FACIAL",
      items: [
        ["Organic Totally Flawless", "1200/-"],
        ["Organic Bride & Groom", "1200/-"],
        ["Organic Brightening", "1200/-"],
        ["Organic Acne Clear", "1200/-"],
        ["Organic Radiant", "1200/-"],
        ["Expert", ""],
      ],
    },
    {
      title: "HAIR STYLING",
      items: [
        ["Blow Dry", "250/-"],
        ["Hair Crimping", "500/-"],
        ["Temporary Straightening", "500/-"],
        ["Hair Curls", "500/-"],
      ],
    },
    {
      title: "PARTY MAKE-UP",
      items: [
        ["Basic Party Makeup", "1500/-"],
        ["Party Makeup With Lash", "1700/-"],
        ["HD Party Makeup", "2200/-"],
        ["Nars Party Makeup", "2800/-"],
      ],
    },
    {
      title: "ENGAGEMENT MAKE-UP",
      items: [
        ["Basic", "4000/-"],
        ["MAC Makeup", "5000/-"],
        ["NARS Makeup", "6000/-"],
        ["Airbrush", "7000/-"],
      ],
    },
  ];

  return (
    <section>
      <div className="max-w-5xl  mx-auto  space-y-10">
        <section className="grid md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="mt-10 mb-3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 w-full text-[#f5d27a] inline-block  py-1 border-b border-[#f5d27a]">
                  {section.title}
                </h2>

                <ul className="space-y-2 text-lg font-medium text-gray-200">
                  {section.items.map(([name, price]) => (
                    <li key={name} className="flex justify-between ">
                      <span>{name}</span>
                      <span>{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
