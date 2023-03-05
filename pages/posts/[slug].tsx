import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import TopBar from "../../components/topbar";
import { ptSerif } from "..";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className={ptSerif.className}>
      <Layout preview={preview}>
        <Container>
          <TopBar />
          <Header />
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="mb-32 xl:px-40">
                <Head>
                  <title>{post.title} | Jens Bech-Sørensen</title>
                  <meta property="og:image" content={post.ogImage.url} />
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post?.coverImage}
                  date={post.date}
                />
                <PostBody content={post.content} />
              </article>
              <div className="pt-10 text-center">
                <button
                  className="pb-12 mx-auto text-3xl mb-16 text-violet-700"
                  onClick={handleClick}
                >
                  To the top! 👏
                </button>
                <div className="pt-1 bg-violet-500 bottom-0 rounded-t-md"></div>
              </div>
            </>
          )}
        </Container>
      </Layout>
    </div>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

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
