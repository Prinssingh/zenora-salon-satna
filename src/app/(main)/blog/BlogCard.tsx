"use client";
import React from "react";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { blogPost } from "@/lib/data";
import { useRouter } from "next/navigation";

const BlogCard: React.FC = () => {
  const rounter = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-8 sm:py-12 lg:py-18 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Blog Card */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPost.map((post, index) => (
            <article
              onClick={() => rounter.push(`/blog/${post.id}`)}
              key={index}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={post.image}
                  alt={post.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

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
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-golden transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

                {/* Read More Button */}
                <button className="flex items-center gap-2 text-gray-900 font-bold uppercase text-sm tracking-wider group-hover:text-golden transition-colors duration-300">
                 Explore More
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>

              {/* Bottom Accent Line */}
              <div className="h-1 bg-gradient-to-r from-golden via-amber-500 to-golden transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
