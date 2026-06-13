"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  Grid,
  List,
  Sparkles,

  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { portfolioCategories, portfolioItems } from "@/lib/data";



interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

const PortfolioCategoriesFilter: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Use centralized data from data.ts
  const categories = portfolioCategories;

  // Use centralized data from data.ts
  const items = portfolioItems;

  const handleCategoryChange = (categoryId: string) => {
    setIsAnimating(true);
    setActiveCategory(categoryId);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const filteredItems = items.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (item: PortfolioItem) => {
    setSelectedItem(item);
    const index = filteredItems.findIndex((i) => i.id === item.id);
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
        : (lightboxIndex + 1) % filteredItems.length;
    setLightboxIndex(newIndex);
    setSelectedItem(filteredItems[newIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox("prev");
      if (e.key === "ArrowRight") navigateLightbox("next");
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedItem, lightboxIndex]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-100 via-100 to-gray-200 py-16  px-2 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-12">
          <div className="inline-block mb-6">
            <div className="bg-golden ease-in px-10 duration-300 hover:scale-105 text-white  py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase border border-golden shadow-sm flex items-center justify-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Our Work
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4">
            <span>
              PORTFOLIO{" "}
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-golden to-golden">
                GALLERY
              </span>
            </span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our collection of stunning transformations and creative work
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-golden to-transparent mx-auto mt-6"></div>
        </div>

        {/* Search and View Toggle */}
        <div className="flex flex-col  sm:flex-row gap-4 mb-8 items-center justify-between">
          <div className="relative flex-1 max-w-md w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search portfolio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border-[0.5px] border-gray-200 rounded-xl focus:border-golden focus:outline-none transition-all duration-300 text-gray-900"
            />
          </div>

          <div className="flex items-center space-x-2 bg-white border-[0.5px] border-gray-200 rounded-xl p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-golden text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-golden text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`group flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-golden to-golden text-white shadow-lg shadow-golden/50"
                  : "bg-white text-gray-700 hover:bg-gray-50 border-[0.5px] border-gray-200 hover:border-golden"
              }`}
            >
              <category.icon
                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  activeCategory === category.id ? "text-white" : "text-golden"
                }`}
              />
              <span>{category.label}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id
                    ? "bg-white/20"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center sm:text-left">
          <p className="text-gray-600 text-sm sm:text-base">
            Showing{" "}
            <span className="font-bold text-golden">
              {filteredItems.length}
            </span>{" "}
            {filteredItems.length === 1 ? "result" : "results"}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Portfolio Grid/List */}
        <div
          className={`transition-all duration-500 ${
            isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {viewMode === "grid" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-golden/90 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-lg sm:text-xl mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-golden/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6 ">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item)}
                  className="group bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl hover:border-golden transition-all duration-500 overflow-hidden border-[0.5px] border-gray-200 cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-64 h-48 sm:h-auto overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-golden transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No Results Found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="bg-golden hover:bg-golden text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-50 group"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <button
            onClick={() => navigateLightbox("prev")}
            className="absolute left-4 sm:left-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-50"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => navigateLightbox("next")}
            className="absolute right-4 sm:right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-50"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="relative max-w-6xl max-h-[90vh] mx-4 sm:mx-6">
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-3">
                {selectedItem.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedItem.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-golden text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            {lightboxIndex + 1} / {filteredItems.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioCategoriesFilter;
