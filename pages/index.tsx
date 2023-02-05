import Container from "../components/container";
import Stories from "../components/stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import { PT_Serif } from "@next/font/google";
import TopBar from "../components/topbar";
import Icons from "../components/icons";

export const ptSerif = PT_Serif({
  weight: "400",
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
          <title>{`jens.bechsor.no`}</title>
        </Head>
        <Container>
          <TopBar />
          <Intro />
          <Icons />
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
  ]);

  return {
    props: { allPosts },
  };
};
