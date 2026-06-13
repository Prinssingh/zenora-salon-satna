"use client";
import { CommentsList } from "@/components/blog/blogDetails/CommentsList";
import { RecentPosts } from "@/components/blog/blogDetails/RecentPosts";
import ContactForm from "@/components/contact/ContactForm";
import { QuoteBlock } from "@/components/ui/quote-block";
import { blogPost } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Clock, Heart, MessageCircle, User } from "lucide-react";


export default function BlogDetailsClient({id} :{id:String}) {


  if (!id) return null;
  const blogId = Number(id);
  const blog = blogPost.find((item) => item.id === blogId);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Blog Details not found
      </div>
    );
  }
const blogDetailsForm = true;
  return (
    <div className="min-h-screen mt-5 bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 sm:py-16 lg:py-20 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between  gap-6 sm:gap-8 md:gap-10">
          <div>
            {/* Blog Card */}
            <article className="group bg-white rounded shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              {/* Image Container */}
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                {/* Image */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Date Badge */}
                <div className="absolute top-6 left-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
                  <div className="relative p-4 text-center">
                    <div className="text-3xl sm:text-4xl font-bold leading-none">
                      {blog.date}
                    </div>
                    <div className="text-sm font-medium mt-1 opacity-90">
                      {blog.month}
                    </div>
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  </div>
                </div>

                {/* Category Tags */}
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                  {/* {blog.map((cat, idx) => ( */}
                  <span
                    //   key={idx}
                    className="bg-white/90 backdrop-blur-md text-gray-800 px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg hover:bg-amber-500 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    cat
                    {/* {cat} */}
                  </span>
                  {/* //   ))} */}
                </div>
              </div>
            </article>

            {/* Content */}
            <div className="mt-6 lg:px-0 px-4">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-600 mb-3">
                <div className="flex items-center space-x-2 group/item">
                  <User className="w-4 h-4 text-amber-600 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{blog.author}</span>
                </div>

                <div className="flex items-center space-x-2 group/item">
                  <MessageCircle className="w-4 h-4 text-amber-600 group-hover/item:scale-110 transition-transform duration-300" />
                  <span>{blog.comment} Comments</span>
                </div>

                <div className="flex items-center space-x-2 group/item">
                  <Clock className="w-4 h-4 text-amber-600 group-hover/item:scale-110 transition-transform duration-300" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-gray-900 mb-4 leading-tight transition-colors duration-300">
                <p className={cn("decoration-2 decoration-amber-600")}>
                  {blog.title}
                </p>
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                {blog.excerpt}
              </p>

              {/* Excerpt2 */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                {blog.excerpt2}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
            </div>

            <main className="mt-10 mb-5 ">
              <QuoteBlock className="max-w-7xl mx-auto">
                {
                  "Healthy, shiny hair instantly lifts your mood and style. Regular trims keep split ends away, while deep-conditioning or hair spa treatments restore life to dull strands. If you color your hair, use sulfate-free products and get professional touch-ups to maintain the shine. Salon Tip: A Keratin or Smoothening Treatment not only tames frizz but also adds a polished, confident look that lasts for weeks."
                }
              </QuoteBlock>
            </main>
            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4 !mt-10"></div>

            {/* Excerpt3 */}
            <p className="text-gray-600 lg:px-0 px-4 text-base sm:text-lg leading-relaxed mb-4">
              {blog.excerpt3}
            </p>

            {/* Excerpt4 */}
            <p className="text-gray-600 lg:px-0 px-4 text-base sm:text-lg leading-relaxed mb-6">
              {blog.excerpt4}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200  mb-4 "></div>

            {/* <div className="flex gap-3 lg:px-0 px-4 items-center">
              <Heart className="text-golden " size={20} />
              <p>Lily and 4 people like this</p>
            </div> */}
            {/* <CommentsList /> */}
            <ContactForm blogDetailsForm={blogDetailsForm} />
          </div>
          {/* <RecentPosts /> */}
        </div>
      </div>
    </div>
  );
}
