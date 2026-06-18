'use client'
import React, { useState } from "react";
import {
  CheckCircle,
  Mail,
  Phone,
  MapPin,
 
} from "lucide-react";
import { sections } from "@/lib/data";



const PrivacyPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["introduction"])
  );




  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
    setActiveSection(id);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

 

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100">
      {/* Progress Bar */}
      {/* <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-linear-to-r from-amber-600 to-amber-700 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 px-3">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-300 group ${
                      activeSection === section.id
                        ? "bg-golden text-white shadow-lg shadow-amber-600/30"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <section.icon
                      className={`w-4 h-4 shrink-0 ${
                        activeSection === section.id
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
              {sections.map((section, idx) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                >
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0 w-12 h-12 bg-linear-to-br from-golden to-golden rounded-xl flex items-center justify-center">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                          {idx + 1}. {section.title}
                        </h2>
                      </div>
                    </div>
                  
                  </button>

                  {/* Section Content */}
                  <div
                    className={`transition-all max-h-[5000px] opacity-100  duration-500  overflow-hidden`}
                  >
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-6">
                      {/* Main Content */}
                      {section.content.map((paragraph, pIdx) => (
                        <p key={pIdx} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}

                      {/* Subsections */}
                      {section.subsections && (
                        <div className="space-y-6 mt-6">
                          {section.subsections.map((subsection, sIdx) => (
                            <div
                              key={sIdx}
                              className="bg-linear-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100"
                            >
                              <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                                <span>{subsection.title}</span>
                              </h3>
                              <ul className="space-y-3">
                                {subsection.content.map((item, iIdx) => (
                                  <li
                                    key={iIdx}
                                    className="flex items-start space-x-3"
                                  >
                                    <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
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
                If you have any questions about this Privacy Policy or our
                practices, please contact us:
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="zenoraunisexfamilysalon@gmail.com"
                      className="text-amber-400 hover:text-golden"
                    >
                     zenoraunisexfamilysalon@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
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
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-gray-300">
                      ZENORA Unisex Salon, 1st Floor, Sc. School,
                      <br />
                      Anil studio Building, Rewa Rd, opp. Christ Jyoti Road, Shakti Vihar, Jeevan Jyoti Colony,
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

export default PrivacyPolicy;
