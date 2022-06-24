import Link from 'next/link';
import DateFormatter from '../DateFormatter';

function BlogCard({ title, date, excerpt, slug }) {
  return (
    <section>
      <div className="my-4 py-4 border-b">
        <h2 className="text-cyan-800 font-bold text-2xl my-4">{title}</h2>
        <DateFormatter dateString={date} />
        <p className="mt-4 italic">{excerpt}</p>
        <Link href="/[slug]" as={`/${slug}`}>
          <a className="text-blue-500 mt-4 mb-2 block">Read more</a>
        </Link>
      </div>
    </section>
  );
}

export default BlogCard;
