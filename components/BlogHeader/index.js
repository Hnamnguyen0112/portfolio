import CoverImage from '../CoverImage';
import DateFormatter from '../DateFormatter';

export default function BlogHeader({ title, coverImage, date, readingTime }) {
  return (
    <>
      <h1 className="text-cyan-800 text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
          <p className="text-gray-400">{readingTime}</p>
        </div>
      </div>
    </>
  );
}
