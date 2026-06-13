"use client";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { heroStats } from "@/lib/data";
import heroImage from "@/assets/i3.png"
export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Use centralized data from data.ts
  const stats = heroStats;
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = stat.duration;
      const incrementTime = 50; // ms
      const step = end / (duration / incrementTime);

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(start);
          return newCounts;
        });
      }, incrementTime);
    });
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch((err) => {
        console.warn("Autoplay blocked:", err);
      });
      video.playbackRate = 0.5; // Smooth slow motion
    };

    playVideo();

    // 🔁 Keep playing even if browser pauses or ends video
    const handlePause = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    const handleEnded = () => {
      video.currentTime = 0;
      video.play();
    };

    // 🔄 Resume when user returns to tab
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        video.play().catch(() => {});
      }
    };

    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);
  return (
    <div>
      <div className="relative min-h-dvh flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/90 lg:to-black/20 z-10"></div>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            preload="auto"
            poster={heroImage.src}
          >
            <source src="/home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-golden/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-800/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        {/* Content */}
        <div className="relative b z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8 ">
              <div className="space-y-2">
                <p className="text-golden font-bo tracking-wider text-sm sm:text-base uppercase animate-fade-in">
                  WELCOME TO ZENORA
                </p>
                <h1 className="text-4xl sm:text-3xl lg:text-[2rem] font-bold leading-tight">
                  <span className="block animate-slide-up">
                    WHERE BEAUTY MEETS CONFIDENCE.
                  </span>

                  <span className="block text-golden animate-slide-up delay-200">
                    AND CHANGE BECOMES ART.
                  </span>
                </h1>
              </div>

              {/* Large Background Text */}
              <div className="relative">
                <h2 className="text-5xl sm:text-6xl lg:text-[4.6rem] font-black text-transparent bg-clip-text bg-linear-to-r from-gray-400 to-gray-400 opacity-90 select-none lg:leading-[0.8] animate-[glow_2s_ease-in-out_infinite_alternate] drop-shadow-[0_0_25px_rgba(255,193,7,0.45)]">
                  FEEL MORE{" "}
                  <span className="text-amber-300/70 ">CONFIDENT</span>
                </h2>

                <style jsx>{`
                  @keyframes glow {
                    from {
                      // filter: drop-shadow(0 0 8px rgba(255, 193, 7, 0.2));
                    }
                    to {
                      filter: drop-shadow(0 0 20px rgba(255, 193, 7, 0.6));
                    }
                  }
                `}</style>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <button className="group lg:w-auto w-full cursor-pointer bg-golden hover:bg-golden/90 text-white px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-golden/50 flex items-center space-x-3">
                  <span>Begin Your Zenora Experience</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 text-center sm:text-left">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-3xl sm:text-4xl font-bold text-golden">
                      {counts[i]}
                      {stat.suffix}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image - Desktop Only */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-18 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
          <div className="w-6 h-10 border-2 border-golden/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-golden rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }

        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
}
