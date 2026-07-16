import { getPostBySlug, getMdxFiles } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const files = getMdxFiles("projects");
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPostBySlug("projects", resolvedParams.slug);

  if (!post) {
    return notFound();
  }

  const { metadata, content } = post;

  return (
    <article className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{metadata.title}</h1>
          <p className="text-xl text-neutral-400 leading-relaxed mb-6">
            {metadata.desc}
          </p>
          {metadata.tags && (
            <div className="flex flex-wrap gap-2">
              {metadata.tags.map((tag: string) => (
                <span key={tag} className="text-sm px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-invert prose-blue max-w-none prose-headings:font-bold prose-a:text-blue-400 hover:prose-a:text-blue-300">
          <MDXRemote source={content} />
        </div>
      </div>
    </article>
  );
}
