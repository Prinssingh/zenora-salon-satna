"use client";
import React from "react";

interface Service {
  name: string;
  price: string;
}

interface Section {
  title: string;
  services: Service[];
}

const SalonServices: React.FC = () => {
  const sections: Section[] = [
    {
      title: "Manicure",
      services: [
        { name: "ANTI TAN MANICURE", price: "499/-" },
        { name: "ANTI TAN WITH BLEECH", price: "499/-" },
      ],
    },
    {
      title: "Padicure",
      services: [
        { name: "ANTI TAN PEDICURE", price: "499/-" },
        { name: "ANTI TAN WITH BLEECH", price: "699/-" },
        { name: "HEEL REPAIR PEDICURE", price: "999/-" },
      ],
    },
    {
      title: "Makeup & Style",
      services: [
        { name: "GROOM MATE TOUCH", price: "999/-" },
        { name: "ENGAGEMENT MAKEUP", price: "1499/-" },
        { name: "GROOM MAKEUP", price: "1999/-" },
      ],
    },
  ];

  return (
    <div className="  text-white px-2 py-10 font-serif">
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-5">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl md:text-3xl font-extrabold border-b border-[#f5d27a] w-full py-1 text-[#c6a44d] mb-4">
              {section.title}
            </h2>

            <ul className="space-y-3">
              {section.services.map((service, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center border-b border-gray-700 pb-1"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#c6a44d] text-lg">•</span>
                    {service.name}
                  </span>
                  <span className=" font-medium">
                    {service.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalonServices;
