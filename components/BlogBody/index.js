import { MDXRemote } from 'next-mdx-remote';

export default function BlogBody({ content }) {
  return (
    <div className="prose lg:prose-xl max-w-2xl mx-auto">
      <MDXRemote {...content} />
      <style jsx>{`
        .prose {
          font-family: charter, Georgia, Cambria, 'Times New Roman', Times,
            serif;
        }
      `}</style>
    </div>
  );
}
