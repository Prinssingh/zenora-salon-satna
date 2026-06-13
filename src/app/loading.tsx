"use client";

import React, { useState, useEffect } from "react";
import logo from "@/assets/Logo.png";
import Image from "next/image";

export default function ZenoraVideoLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Subtle linear background */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-zinc-900 to-black opacity-50"></div>

      {/* Animated golden glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Main loader content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Rotating circular loader */}
        <div className="relative w-48 h-48 mb-8">
          {/* Outer rotating ring */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin"
            style={{ animationDuration: "3s" }}
          >
            <circle
              cx="96"
              cy="96"
              r="88"
              fill="none"
              stroke="url(#goldlinear)"
              strokeWidth="2"
              strokeDasharray="280 280"
              strokeLinecap="round"
              className="opacity-60"
            />
            <defs>
              <linearGradient
                id="goldlinear"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#c79863" />
                <stop offset="50%" stopColor="#f4e4c1" />
                <stop offset="100%" stopColor="#c79863" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner rotating ring - opposite direction */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ animation: "spin 4s linear infinite reverse" }}
          >
            <circle
              cx="96"
              cy="96"
              r="76"
              fill="none"
              stroke="#c79863"
              strokeWidth="1"
              strokeDasharray="150 150"
              strokeLinecap="round"
              className="opacity-40"
            />
          </svg>

          {/* Center glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-linear-to-br from-amber-400/20 to-yellow-600/20 rounded-full blur-xl animate-pulse"></div>
          </div>

          {/* Scissors icon in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-80"
            >
              <path
                d="M6 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 0l6 6m0 0l6-6m-6 6l-6 6m6-6l6 6M6 23a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm12 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                stroke="#c79863"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>

        {/* ZENORA text with elegant animation */}
        <div className="relative mb-6 w-80 h-25 flex justify-center">
          <h1 className="flex gap-1 text-5xl font-semibold text-white">
            {"ZENORA".split("").map((letter, index) => (
              <span
                key={index}
                style={{
                
                  animation: `zenoraLetter 0.4s ease-out forwards`,
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {letter}
              </span>
            ))}
          </h1>

          <div className="absolute -bottom-2 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent opacity-60"></div>

         
        </div>

        {/* Tagline */}
        <p
          className="text-amber-200/60 text-sm tracking-widest uppercase font-light mb-8 opacity-0"
          style={{ animation: "fadeIn 1s ease-out 0.8s forwards" }}
        >
          Premium Grooming Experience
        </p>

        {/* Progress bar */}
        <div className="w-64 h-px bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-amber-600 via-yellow-400 to-amber-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          >
            <div className="w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
