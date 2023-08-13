import Container from "../components/container";
import Stories from "../components/stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import { Roboto } from "@next/font/google";
import BottomBar from "../components/bottombar";

export const ptSerif = Roboto({
  weight: "300",
  subsets: ["latin"],
});
type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <div className={ptSerif.className}>
      <Layout>
        <Head>
          <title>{`Jens Bech-Sørensen`}</title>
        </Head>
        <Container>
          <Intro />
          {<Stories posts={allPosts} />}
        </Container>
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "genre",
    "language",
  ]);

  return {
    props: { allPosts },
  };
};
