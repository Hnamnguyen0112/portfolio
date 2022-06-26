import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode from 'rehype-pretty-code';

import BlogBody from '../components/BlogBody';
import BlogHeader from '../components/BlogHeader';
import Layout from '../layouts';
import { getAllPosts, getPostBySlug } from '../lib/api';

const options = {
  // Use one of Shiki's packaged themes
  theme: 'one-dark-pro',
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word'];
  },
};

export default function BlogDetail({ data, content, slug, readingTime }) {
  const router = useRouter();
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <div className="container mx-auto min-h-[calc(100vh-163px)] px-5 py-10">
        {router.isFallback ? (
          <p>Loading…</p>
        ) : (
          <>
            <article className="animate-fade-in-down">
              <Head>
                <title>{data.title}</title>
                <meta property="og:image" content={data.url} />
              </Head>
              <BlogHeader
                title={data.title}
                coverImage={data.coverImage}
                date={data.date}
                readingTime={readingTime}
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
  const { content, data, slug, readingTime } = getPostBySlug(params.slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [[rehypePrettyCode, options]],
    },
    scope: data,
  });

  return {
    props: {
      data,
      slug,
      content: mdxSource,
      readingTime,
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
