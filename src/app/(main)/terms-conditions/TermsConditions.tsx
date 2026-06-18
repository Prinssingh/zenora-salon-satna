"use client";
import React, { useState } from "react";
import { CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { termsAndConditionsSections } from "@/lib/data";

// /lib/data/termsSections.ts
import { ShieldCheck, FileText, Globe, Handshake, AlertTriangle, Lock } from "lucide-react";




const TermsConditions: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [expandedSections, setExpandedSections] =
    useState<Set<string>>(new Set(["introduction"]));

  const toggleSection = (id: string) => {
    const updated = new Set(expandedSections);
    updated.has(id) ? updated.delete(id) : updated.add(id);
    setExpandedSections(updated);
    setActiveSection(id);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  //   const termsSections = [
  //   {
  //     id: "introduction",
  //     title: "Introduction",
  //     icon: FileText,
  //     content: [
  //       "Welcome to BRBER. By accessing or using our website and services, you agree to be bound by these Terms & Conditions.",
  //       "Please read these terms carefully before using our platform.",
  //     ],
  //   },

  //   {
  //     id: "use-of-services",
  //     title: "Use of Our Services",
  //     icon: ShieldCheck,
  //     content: [
  //       "Our services are provided solely for lawful purposes. You agree not to misuse, disrupt, or damage the platform.",
  //       "You must provide accurate information during registration or when booking appointments.",
  //     ],
  //     subsections: [
  //       {
  //         title: "User Responsibilities",
  //         content: [
  //           "Provide correct and updated details.",
  //           "Do not attempt to hack, reverse-engineer, or damage the website.",
  //           "Use the website only for personal and non-commercial purposes.",
  //         ],
  //       },
  //     ],
  //   },

  //   {
  //     id: "appointments",
  //     title: "Bookings & Appointments",
  //     icon: Handshake,
  //     content: [
  //       "By booking any service through our platform, you acknowledge that availability may depend on staff schedules.",
  //       "We reserve the right to cancel or reschedule appointments when necessary.",
  //     ],
  //     subsections: [
  //       {
  //         title: "Cancellation Policy",
  //         content: [
  //           "Users must notify us of cancellations at least 24 hours in advance.",
  //           "Failure to cancel in time may result in charges or penalties.",
  //         ],
  //       },
  //     ],
  //   },

  //   {
  //     id: "payments",
  //     title: "Payments & Billing",
  //     icon: Globe,
  //     content: [
  //       "All payments must be completed through supported payment methods.",
  //       "Prices for services may be updated periodically without prior notice.",
  //     ],
  //   },

  //   {
  //     id: "limitations",
  //     title: "Limitations of Liability",
  //     icon: AlertTriangle,
  //     content: [
  //       "We are not liable for any indirect damages, loss of data, or service interruptions.",
  //       "Our total liability is limited to the amount paid by the user for the service.",
  //     ],
  //   },

  //   {
  //     id: "privacy",
  //     title: "Privacy & Data Protection",
  //     icon: Lock,
  //     content: [
  //       "Your personal data is handled according to our Privacy Policy.",
  //       "By using our services, you consent to the collection and use of your data as described.",
  //     ],
  //   },

  //   {
  //     id: "changes",
  //     title: "Changes to Terms",
  //     icon: FileText,
  //     content: [
  //       "We reserve the right to update or modify these terms at any time.",
  //       "Continued use of our platform signifies acceptance of updated Terms & Conditions.",
  //     ],
  //   },
  // ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 px-3">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {termsAndConditionsSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-300 group ${activeSection === section.id
                        ? "bg-golden text-white shadow-lg shadow-amber-600/30"
                        : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    <section.icon
                      className={`w-4 h-4 ${activeSection === section.id
                          ? "text-white"
                          : "text-golden"
                        }`}
                    />
                    <span className="text-sm font-medium truncate">
                      {section.title}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {termsAndConditionsSections.map((section, idx) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-golden rounded-xl flex items-center justify-center">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {idx + 1}. {section.title}
                      </h2>
                    </div>
                  </button>

                  <div className="transition-all max-h-[5000px] duration-500 overflow-hidden">
                    <div className="px-6 sm:px-8 pb-6 space-y-6">
                      {section.content.map((p, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed">
                          {p}
                        </p>
                      ))}

                      {section.subsections && (
                        <div className="space-y-6 mt-6">
                          {section.subsections.map((sub, i) => (
                            <div
                              key={i}
                              className="bg-linear-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100"
                            >
                              <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                                {sub.title}
                              </h3>
                              <ul className="space-y-3">
                                {sub.content.map((item, j) => (
                                  <li
                                    key={j}
                                    className="flex items-start space-x-3"
                                  >
                                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                                    <span className="text-gray-700 leading-relaxed">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-12 bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-10 text-white shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Contact Us
              </h2>
              <p className="text-gray-300 mb-6">
                For questions regarding these Terms & Conditions, please reach
                out:
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-amber-500 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:support@brber.com"
                      className="text-amber-400 hover:text-golden"
                    >
                      zenoraunisexfamilysalon@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-amber-500 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a
                      href="tel:+9197534 54519"
                      className="text-amber-400 hover:text-golden"
                    >
                      +91-97534 54519
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:col-span-2">
                  <MapPin className="w-5 h-5 text-amber-500 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-gray-300">
                      ZENORA Unisex Salon, 1st Floor, Sc. School,
                      <br />
                      Anil studio Building, Rewa Rd, opp. Christ Jyoti Road,
                      Shakti Vihar, Jeevan Jyoti Colony,
                      <br />
                      Satna, Madhya Pradesh
                      <br />
                      PIN: 485001, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
