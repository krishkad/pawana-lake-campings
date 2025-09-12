import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/data/BlogData";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm pt-0">
      <div className="relative overflow-hidden">
           {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
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
            <span>
              {new Date(post.publishDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
        </Link>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {post.summary}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
               {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-700">
              {post.author.name}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors duration-200 hover:underline"
          >
            Read More →
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
