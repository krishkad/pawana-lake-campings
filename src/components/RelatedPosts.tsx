import { BlogPost } from "@/data/BlogData";
import { Clock } from "lucide-react";
import Link from "next/link";

interface RelatedPostsProps {
  posts: BlogPost[];
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Related Articles
      </h3>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group flex gap-4 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200"
          >
               {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
            />

            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200 line-clamp-2 mb-1">
                {post.title}
              </h4>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
