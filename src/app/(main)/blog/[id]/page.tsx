import { blogPosts } from "@/lib/data";
import BlogDetailsClient from "./BlogDetailsClient";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <BlogDetailsClient id={id} />;
}
