import Link from 'next/link';

import DateFormatter from '../DateFormatter';

function BlogCard({ title, date, excerpt, slug, readingTime }) {
  return (
    <section>
      <div className="py-8 border-b">
        <h3 className="text-cyan-800 mb-4 text-3xl lg:text-4xl leading-tight">
          <Link href={`/${slug}`}>
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <DateFormatter dateString={date} />
        <span className="mx-4 text-gray-400">{readingTime}</span>
        <p className="mt-4 italic">{excerpt}</p>
        <Link href="/[slug]" as={`/${slug}`}>
          <a className="text-blue-500 mt-4 mb-2 block">Read more</a>
        </Link>
      </div>
    </section>
  );
}

export default BlogCard;
