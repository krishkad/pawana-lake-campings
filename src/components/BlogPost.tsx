// "use client";

import CallToAction from "@/components/CallToAction";
import RelatedPosts from "@/components/RelatedPosts";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogPost as BlogPostProps, getRelatedPosts } from "@/data/BlogData";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

function BlogPost({ post }: { post: BlogPostProps }) {
  // const post = blogPosts.find((p) => p.slug === post.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.slug);
  //   const currentUrl = window.location.href;

  return (
    <>
      <SEO
        title={post.seo.metaTitle}
        description={post.seo.metaDescription}
        keywords={post.seo.keywords}
        image={post.featuredImage}
        url={`/blog/${post.slug}`}
        publishedTime={post.publishDate}
        author={post.author.name}
        tags={post.tags}
        pageType="blog-post"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.featuredImage}
            alt={`${post.title} - ${post.seo.focusKeyword}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* <div className="absolute top-20 left-6">
            <Link href="/blog" aria-label="Back to Blog">
              <Button
                variant="ghost"
                className="text-white hover:text-emerald-200 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div> */}

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto">
              <Badge className="mb-4 bg-emerald-600 hover:bg-emerald-700">
                {post.category}
              </Badge>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.author.avatar}
                    alt={`${post.author.name} - Author`}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-medium">{post.author.name}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>

                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3 order-2 lg:order-none">
                <article className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                      {post.summary}
                    </p>

                    <div
                      className="blog-content"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </div>

                  {/* Author Bio */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-start gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.author.avatar}
                        alt={`${post.author.name} - Author Bio`}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">
                          {post.author.name}
                        </h4>
                        <p className="text-gray-600 mt-1">{post.author.bio}</p>
                      </div>
                    </div>
                  </div>

                  {/* Share Buttons */}
                  {/* <ShareButtons title={post.title} url={currentUrl} /> */}

                  {/* Tags */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="hover:bg-emerald-50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>

                {/* Related Posts */}
                <div className="mt-12">
                  <RelatedPosts posts={relatedPosts} />
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16">
              <CallToAction />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
