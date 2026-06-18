"use client";
import React from "react";
import { Phone, Mail, Clock, MapPin, FileText, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import tfp from "@/assets/tfp.jpg";
import logo from "@/assets/Logo.png";
import { links, socials } from "@/lib/data";
const Footer: React.FC = () => {
  return (
    <footer className="bg-linear-to-br from-zinc-900 via-neutral-900 to-stone-900 relative text-gray-300 overflow-hidden">
      {/* Floating decorative orbs */}
      <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-golden/10 blur-xl animate-pulse"></div>
      <div className="absolute -bottom-12 -right-8 w-32 h-32 rounded-full bg-golden/10 blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-golden/5 blur-lg animate-bounce"></div>
      <div className="absolute bottom-1/4 right-1/3 w-20 h-20 rounded-full bg-golden/5 blur-xl animate-pulse delay-500"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center relative w-40 h-12 lg:w-40 lg:h-16">
              <Link href="/" className="relative w-full h-full">
                <Image
                  src={logo}
                  alt="logo"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 32vw"
                />
              </Link>
            </div>

            <p className="text-gray-400 max-w-[20rem]  w-full leading-relaxed">
              Satna’s trusted unisex salon delivering world-class beauty and
              grooming with expertise, care, and elegance.
            </p>

            <div className="grid gap-4">
              <p className="text-golden font-bold">Follow Us :</p>
              <div className="flex  space-x-4">
                {socials.map(({ Icon, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-gray-50 hover:bg-golden hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block">
              EXPLORE
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-golden"></span>
            </h3>
            <ul className="space-y-3">
              {links.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-3">
                    {item.icon && (
                      <item.icon className="w-4 h-4 text-golden group-hover:text-golden transition-colors duration-200" />
                    )}
                    <Link
                      href={item.path}
                      className="text-gray-400 cursor-pointer hover:text-golden hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-golden"></span>
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex cursor-pointer items-start gap-4 group hover:scale-[1.02] transition-transform duration-300 ease-out">
                <div className="bg-golden p-3 rounded-xl group-hover:shadow-lg group-hover:shadow-golden/40 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-gray-50 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold group-hover:text-golden transition-colors duration-300">
                    Address
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    ZENORA Unisex Salon, 1st Floor,
                    <br />
                    Anil studio Building, Rewa Rd, opp. Christ Jyoti Road, Bus
                    Stand Satna, Madhya Pradesh <br />
                    PIN: 485001, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex mb-8 cursor-pointer items-start gap-4 group hover:scale-[1.02] transition-transform duration-300 ease-out">
                <div className="bg-golden p-3 rounded-xl group-hover:shadow-lg group-hover:shadow-golden/40 transition-all duration-300">
                  <Phone className="w-5 h-5 text-gray-50 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold group-hover:text-golden transition-colors duration-300">
                    Phone
                  </h4>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    +91-97534 54519
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex cursor-pointer items-start gap-4 group hover:scale-[1.02] transition-transform duration-300 ease-out">
                <div className="bg-golden p-3 rounded-xl group-hover:shadow-lg group-hover:shadow-golden/40 transition-all duration-300">
                  <Mail className="w-5 h-5 text-gray-50 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold group-hover:text-golden transition-colors duration-300">
                    Email
                  </h4>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    zenoraunisexfamilysalon@gmail.com
                    <br />
                    contact@zenorasalon.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center md:gap-2 space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              Copyright ©{new Date().getFullYear()} All rights reserved | with{" "}
              <a
                href="#"
                className="text-golden hover:text-golden/90 transition-colors"
              >
                zenora
              </a>
            </p>

            <div className="flex justify-center gap-6 text-sm">
              <Link
                href="/terms-conditions"
                className="text-gray-400 hover:text-white transition flex items-center gap-1"
              >
                <FileText className="w-4 h-4" /> Terms & Conditions
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition flex items-center gap-1"
              >
                <Shield className="w-4 h-4" /> Privacy Policy
              </Link>
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://www.tfptechnologies.in/"
                className="flex justify-center items-center gap-2"
              >
                <span className="text-gray-500">Designed & Developed by |</span>
                <Image alt="tfp" src={tfp} width={30} height={30} />
               TFP Technologies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
