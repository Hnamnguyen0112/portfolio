import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import readingTime from 'reading-time';

const postsDirectory = join(process.cwd(), 'blogs');

export function getPostSlugs() {
  try {
    return fs.readdirSync(postsDirectory);
  } catch (e) {
    return [];
  }
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    slug: realSlug,
    data,
    content,
    readingTime: readingTime(fileContents).text,
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  return (
    slugs
      .map((slug) => getPostBySlug(slug))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  );
}
