import HeroSection from "@/components/blog/HeroSection";

import React from "react";
import BlogCard from "./BlogCard";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <BlogCard />
      <NewsletterSection />
    </div>
  );
}
