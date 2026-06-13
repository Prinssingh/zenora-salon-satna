"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className="fixed bottom-6 cursor-pointer right-6 bg-golden text-white p-3 rounded-full shadow-lg hover:opacity-90 transition"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
}
