"use client";
import React, { useState } from "react";
import pic1 from "@/assets/videogarrely/pic1.png"
import pic2 from "@/assets/videogarrely/exactly.png"
import pic3 from "@/assets/videogarrely/bride.png"
import pic4 from "@/assets/videogarrely/client.png"
import pic5 from "@/assets/videogarrely/pic-5.png"

const videos = [
  {
    id: "1",
    scr: "https://www.youtube.com/embed/WsK6s89GU5Q",
    title: "Bride’s Dream Look Achieved.",
    size: "large",
    thumbnailImage: pic3,
  },
  {
    id: "2",
    scr: "https://www.youtube.com/embed/WsK6s89GU5Q",
    title: "Exactly How the Bride Wanted!",
    size: "small",
    thumbnailImage: pic2,
  },
  {
    id: "3",
    scr: "https://www.youtube.com/embed/hNFyAH0mshk",
    title: "Groom Makeover Transformation",
    size: "small",
    thumbnailImage: pic1,
  },
  {
    id: "4",
    scr: "https://www.youtube.com/embed/TTsga-Ai8S4",
    title: "Client Review: Why They Trust Us!",
    size: "small",
    thumbnailImage: pic4,
  },
  {
    id: "5",
    scr: "https://www.youtube.com/embed/hNFyAH0mshk",
    title: "Groom Makeover Transformation",
    size: "small",
    thumbnailImage: pic5,
  },
];

const VideoGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [loadingVideo, setLoadingVideo] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex justify-center hover:scale-105 transition-all ease-in-out duration-300 mb-6">
        <span className="inline-block px-4 sm:px-6 py-2 text-sm font-semibold tracking-wide uppercase rounded-full bg-linear-to-r from-golden to-golden/90 text-gray-50">
          Watch the Magic Happen
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl mt-5 lg:text-6xl font-black uppercase leading-tight text-center mb-12 text-gray-50">
        Zenora
        <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-golden to-golden/90">
          Transformation Studio
        </span>
        <div className="w-20 h-1 bg-linear-to-r from-transparent via-golden to-transparent mx-auto mt-4"></div>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px]">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`group relative rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              video.size === "large" ? "sm:col-span-2 sm:row-span-2" : ""
            } ${video.size === "medium" ? "sm:row-span-2" : ""}`}
          >
            {activeVideo === String(video.id) ? (
              <iframe
                className="w-full h-full"
                src={`${video.scr}?autoplay=1&mute=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setLoadingVideo(null)}
              />
            ) : (
              <div
                className="w-full h-full cursor-pointer relative"
                onClick={() => {
                  setLoadingVideo(video.id);
                  setActiveVideo(video.id);
                }}
              >
                <img
                  className="w-full h-full object-cover"
                  src={
                    typeof video.thumbnailImage === "string"
                      ? video.thumbnailImage
                      : video.thumbnailImage.src
                  }
                  alt={`${video.title} – thumbnail image`}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  {loadingVideo === video.id ? (
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <div className="w-20 h-20 rounded-full  bg-opacity-20 backdrop-blur-sm flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                      <svg
                        className="w-10 h-10 text-white drop-shadow-lg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <p className="text-white font-semibold text-sm drop-shadow-md">
                    {video.title}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
