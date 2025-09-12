"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/BlogData";
import Link from "next/link";

const BlogSection = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-emerald-50">
    
      {/* Featured Blog Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Pawana Lake
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our latest articles about the beauty, adventures, and unique experiences 
            that await you at Maharashtra&apos;s premier luxury camping destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-fade-in pt-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-4 left-4 bg-emerald-600 hover:bg-emerald-700 text-white">
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <Link href={`/blog/${post.slug}`}>
                  <CardTitle className="text-xl group-hover:text-emerald-700 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </CardTitle>
                </Link>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
                
                <Link
                href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200 hover:underline"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button 
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 text-lg transition-all duration-200"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-emerald-50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏕️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Luxury Camping</h3>
              <p className="text-gray-600">Experience the perfect blend of nature and comfort with our premium camping facilities.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lakeside Views</h3>
              <p className="text-gray-600">Wake up to stunning sunrise views over the pristine waters of Pawana Lake.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⛰️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Adventure Ready</h3>
              <p className="text-gray-600">Explore nearby forts, caves, and trekking trails for unforgettable adventures.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;