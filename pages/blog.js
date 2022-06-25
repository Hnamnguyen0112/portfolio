import BlogCard from '../components/BlogCard';
import ComingSoon from '../components/ComingSoon';
import Layout from '../layouts';
import { getAllPosts } from '../lib/api';

export default function Blog({ posts }) {
  return (
    <Layout>
      {posts.length > 0 ? (
        <div className="container mx-auto min-h-[calc(100vh-163px)] px-5 animate-fade-in-down">
          <h1 className="mt-14 mb-12 font-bold text-3xl">Latest Posts</h1>
          {posts.map((post) => (
            <BlogCard
              key={post.data.title}
              title={post.data.title}
              coverImage={post.data.coverImage}
              date={post.data.date}
              slug={post.slug}
              excerpt={post.data.excerpt}
            />
          ))}
        </div>
      ) : (
        <ComingSoon />
      )}
    </Layout>
  );
}

export const getStaticProps = () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
