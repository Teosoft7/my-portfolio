import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content");

export interface BaseMetadata {
  title: string;
  desc?: string;
  type?: string;
  featured?: boolean;
  tags?: string[];
  [key: string]: any;
}

export function getMdxFiles(dir: string) {
  const fullPath = path.join(contentDir, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs.readdirSync(fullPath).filter((file) => path.extname(file) === ".mdx");
}

export function getPostBySlug(dir: string, slug: string) {
  const fullPath = path.join(contentDir, dir, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    metadata: data as BaseMetadata,
    content,
  };
}

export function getAllPosts(dir: string): (BaseMetadata & { slug: string })[] {
  const files = getMdxFiles(dir);

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const { metadata } = getPostBySlug(dir, slug)!;
    return {
      slug,
      ...metadata,
    };
  });

  return posts;
}
