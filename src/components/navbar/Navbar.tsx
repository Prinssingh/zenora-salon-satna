"use client";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import logo from "@/assets/Logo.png";
import Link from "next/link";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [openService, setOpenService] = useState(false);
  const pathname = usePathname();

  // Use centralized data from data.ts

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => setHasMounted(true), []);
  if (!hasMounted) return null;
  const isBlogDetail = pathname.startsWith("/blog/") && pathname !== "/blog";



  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isBlogDetail
          ? "bg-black/80 shadow-lg lg:p-2"
          : isScrolled
          ? "bg-black/80 shadow-lg lg:p-2"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between lg:h-20 h-15">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <Link href={"/"}>
              <Image src={logo} alt="logo" className="lg:w-40 w-30" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, idx) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.toLowerCase().startsWith(item.href.toLowerCase());
              return (
                <div key={idx} className="relative group">
                  <Link
                    href={item.href}
                    className={`text-md font-medium transition-colors duration-300 relative group-hover:text-amber-300 ${
                      isActive ? "text-golden" : "text-gray-300"
                    }`}
                  >
                    {item.label === "Services" ? (
                      <span className="inline-flex items-center gap-1">
                        Services <ChevronDown size={16} />
                      </span>
                    ) : (
                      item.label
                    )}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>

                  {/* Dropdown for Services */}
                  {item.label === "Services" && (
                    <div className="absolute left-0 mt-2 w-40 rounded-lg bg-[#fffbfb] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <Link
                        href="/services/male"
                        className="block px-4 py-2 text-gray-800  hover:text-amber-300 ease-in hover:bg-[#8f8989] transition-colors duration-300"
                      >
                        Male
                      </Link>
                      <Link
                        href="/services/female"
                        className="block px-4 py-2 text-gray-800 hover:text-amber-300 hover:bg-[#8f8989] ease-in transition-colors duration-300"
                      >
                        Female
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-40 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-golden/60">
          <h2 className="text-2xl font-bold text-golden drop-shadow-[0_0_4px_#c79863]">
            Zenora
          </h2>
          <button
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="p-1 rounded-lg hover:bg-white/10 cursor-pointer transition"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="px-6 py-6 flex flex-col space-y-1">
          {navItems.map((item, idx) => {
            const isActive = pathname === item.href;
            const isServices = item.label === "Services";
            return (
              <div key={idx}>
                {!isServices ? (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 text-lg transition-colors duration-300 ${
                      isActive
                        ? "text-amber-500 font-semibold"
                        : "text-gray-300 hover:text-amber-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => setOpenService(!openService)}
                      className={`w-full text-left py-2 text-lg flex justify-between items-center transition-colors duration-300 ${
                        isActive
                          ? "text-amber-500 font-semibold"
                          : "text-gray-300 hover:text-amber-500"
                      }`}
                    >
                      Services
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 cursor-pointer ${
                          openService ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Services Submenu */}
                    <div
                      className={`ml-4 mt-1 overflow-hidden transition-all  duration-300 ${
                        !openService
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <Link
                        href="/services/male"
                        onClick={() => setIsMenuOpen(false)}
                        className="block cursor-pointer text-gray-300 hover:text-amber-300 py-1"
                      >
                        Male
                      </Link>
                      <Link
                        href="/services/female"
                        onClick={() => setIsMenuOpen(false)}
                        className="block cursor-pointer text-gray-300 hover:text-amber-300 py-1"
                      >
                        Female
                      </Link>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/70 lg:hidden"
        ></div>
      )}
    </nav>
  );
}
