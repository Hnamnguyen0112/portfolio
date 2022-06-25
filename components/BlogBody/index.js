import { MDXRemote } from 'next-mdx-remote';

export default function BlogBody({ content }) {
  return (
    <p className="prose lg:prose-xl max-w-2xl mx-auto">
      <MDXRemote {...content} />
    </p>
  );
}
