"use client";

import BlogCard from "@/components/BlogCard";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

import SEO from "@/components/SEO";
import { blogPosts } from "@/data/BlogData";
 
const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Pawana Lake Blog - Camping Guide & Travel Tips"
        description="Discover the best camping experiences, travel guides, and adventure activities at Pawana Lake, Maharashtra. Expert tips for your perfect getaway."
        keywords={[
          "Pawana Lake blog",
          "camping near Pawana Lake",
          "things to do at Pawana Lake",
          "best time to visit Pawana Lake",
          "tourist attractions near Pawana Lake",
          "Maharashtra camping guide",
          "luxury camping Maharashtra",
          "Pawana Lake activities",
          "camping resort Maharashtra",
          "weekend getaway near Mumbai",
        ]}
        url="/blog"
        type="website"
        pageType="blog-list"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-teal-50">
        {/* Hero Section */}
        <div className="relative h-[450px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />

          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Pawana Lake Blog
            </h1>

            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in">
              Discover the beauty, adventures, and experiences that make Pawana
              Lake Maharashtra&apos;s premier luxury camping destination.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/80 backdrop-blur-sm border-emerald-200 focus:border-emerald-500"
                  aria-label="Search blog articles"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedCategory === null ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  selectedCategory === null
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "hover:bg-emerald-50"
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </Badge>

              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  className={`cursor-pointer transition-colors ${
                    selectedCategory === category
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "hover:bg-emerald-50"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}

          {/* Newsletter Section */}
        </div>
      </div>
    </>
  );
};

export default BlogList;
