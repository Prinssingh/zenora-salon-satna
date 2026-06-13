"use client";
import React, { useState, useRef, useEffect } from "react";
import { Play, Video,  X } from "lucide-react";
import { videoItems } from "@/lib/data";

interface VideoItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
  icon: React.ElementType;
  videoUrl: string; // ✅ Added for iframe link
}

const VideoSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [showControls, setShowControls] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Use centralized data from data.ts
  const videos = videoItems;

  const handleVideoClick = (video: VideoItem) => {
    setSelectedVideo(video);
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-zinc-800 via-neutral-900 to-stone-900 text-white py-16 px-2 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-golden/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-golden opacity-80 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-golden opacity-70 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="bg-golden ease-in px-10 duration-300 hover:scale-105 text-white  py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase border border-golden shadow-sm flex items-center justify-center space-x-2">
              <Video className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-semibold uppercase">
                Video Stories
              </span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="block">Experience Our</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-golden to-golden">
              Salon Story
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Immerse yourself in the artistry and elegance of our salon through
            cinematic storytelling
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => handleVideoClick(video)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-golden/20 transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
                <div className="bg-golden/90 rounded-full p-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-lg font-semibold">{video.title}</h3>
                <p className="text-gray-300 text-sm">{video.description}</p>
              </div>

              <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded-md text-sm flex items-center gap-2">
                <video.icon className="w-4 h-4 text-golden" />
                {video.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with iFrame */}
      {selectedVideo && (
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          {/* Close Button */}
          <button
            onClick={closeVideo}
            className={`absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 z-50 ${
              showControls ? "opacity-100" : "opacity-0"
            }`}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Iframe Video Player */}
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-black/90">
            <iframe
              src={`${selectedVideo.videoUrl}?autoplay=1`}
              title={selectedVideo.title}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Info Overlay */}
          <div
            className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-medium flex items-center space-x-2 transition-all duration-300 ${
              showControls ? "opacity-100" : "opacity-0"
            }`}
          >
            <selectedVideo.icon className="w-4 h-4 text-golden" />
            <span>{selectedVideo.category}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
