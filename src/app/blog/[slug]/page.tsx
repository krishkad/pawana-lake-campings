// ✅ Server Component
import { blogPosts } from "@/data/BlogData";
import BlogPost from "@/components/BlogPost";
import { notFound } from "next/navigation";


type PageProps = {
  params: Promise<{ slug: string }>;
};


export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params; // Await the params Promise
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return <BlogPost post={post} />;
}

export function generateStaticParams() {
  return blogPosts;
}


