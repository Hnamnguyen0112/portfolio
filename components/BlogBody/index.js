import { MDXRemote } from 'next-mdx-remote';

export default function BlogBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <MDXRemote {...content} />
    </div>
  );
}
