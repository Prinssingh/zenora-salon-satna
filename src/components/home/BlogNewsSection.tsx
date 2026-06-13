"use client";
import React from "react";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { useRouter } from "next/navigation";
import { blogPosts } from "@/lib/data";

export default function BlogNewsSection() {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/blog/${id}`);
  };


  return (
    <div className="bg-linear-to-b from-gray-50 to-white py-16 ">
      <div className="container mx-auto px-2 ">
        {/* Header */}
        <div className="text-center  mb-16 max-w-4xl mx-auto">
          <div className="inline-block">
            <span className="bg-golden duration-200 ease-in hover:scale-105 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase border border-golden shadow-sm flex items-center space-x-2">
              <span>Zenora News & Trends</span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mt-5  font-black uppercase leading-tight text-gray-900">
            Expert Tips & Insights
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-golden to-golden/90">
              From Our Blog
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-golden to-transparent mx-auto mt-4"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.slice(0,3).map((post, index) => (
            
            <article
              key={post.id}
              onClick={() =>handleClick(post.id)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay linear */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Date Badge */}
                <div className="absolute top-6 left-6 bg-gray-900/90 backdrop-blur-sm text-white rounded-xl p-4 text-center min-w-[70px] border border-golden/50">
                  <div className="text-3xl font-bold leading-none">
                    {post.date}
                  </div>
                  <div className="text-sm font-semibold mt-1 text-amber-500">
                    {post.month}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 right-6 bg-golden text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <Tag className="w-3 h-3" />
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl  font-bold text-gray-900 mb-3 group-hover:text-golden transition-colors duration-300 line-clamp-1">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 lg:h-23  mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Divider */}
                <div className="h-px bg-linear-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

                {/* Read More Button */}
                <button className="flex cursor-pointer items-center gap-2 text-gray-900 font-bold uppercase text-sm tracking-wider group-hover:text-golden transition-colors duration-300">
                  More Blogs
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>

              {/* Bottom Accent Line */}
              <div className="h-1 bg-linear-to-r from-golden via-amber-500 to-golden transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
