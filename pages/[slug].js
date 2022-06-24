import { useRouter } from 'next/router';
import Layout from '../layouts';
import ErrorPage from 'next/error';
import { getAllPosts, getPostBySlug } from '../lib/api';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import BlogHeader from '../components/BlogHeader';
import BlogBody from '../components/BlogBody';

export default function BlogDetail({ data, content, slug }) {
  const router = useRouter();
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <div className="container mx-auto min-h-[calc(100vh-163px)] px-5 pt-10">
        {router.isFallback ? (
          <p>Loading…</p>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{data.title}</title>
                <meta property="og:image" content={data.url} />
              </Head>
              <BlogHeader
                title={data.title}
                coverImage={data.coverImage}
                date={data.date}
              />
              <BlogBody content={content} />
            </article>
          </>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const content = await serialize(post.content || '');

  return {
    props: {
      data: post.data,
      slug: post.slug,
      content,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
