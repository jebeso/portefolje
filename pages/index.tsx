import Container from "../components/container";
import Stories from "../components/stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";

import { Playfair_Display } from "@next/font/google";
import TopBar from "../components/topbar";
import Filter from "../components/filter";
import About from "../components/icons";

const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <div className={playfairDisplay.className}>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <TopBar />
          <Intro />
          <About />
          <br></br>
          <Filter />
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
