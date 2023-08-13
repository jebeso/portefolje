import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { useState } from "react";
import Link from "next/link";
import SearchFilter from "./SearchFilter";
import { useFilteredPosts } from "../hooks/useFilteredPosts";
import BottomBar from "./bottombar";

export type Props = {
  posts: Post[];
};

const Stories = ({ posts }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = useFilteredPosts(posts, null, null, searchTerm);

  return (
    <section>
      <h2 className="text-5xl md:text-7x tracking-tighter leading-tight"></h2>
      <div className="text-center md:text-left flex flex-col">
        <div className="md:flex">
          <SearchFilter
            searchTerm={searchTerm}
            handleSearchTerm={handleSearchTerm}
          />
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-y-4 md:gap-y-6 lg:gap-y-10 pt-10">
        {filteredPosts.map(
          ({ title, coverImage, date, slug, excerpt, genre, language }) => (
            <Link key={slug} as={`/posts/${slug}`} href="/posts/[slug]">
              <div key={slug} className="h-full flex">
                <PostPreview
                  title={title}
                  coverImage={coverImage}
                  date={date}
                  slug={slug}
                  excerpt={excerpt}
                  genre={genre}
                  language={language}
                />
              </div>
            </Link>
          )
        )}
        <BottomBar filteredPosts={filteredPosts.length} />
      </div>
    </section>
  );
};

export default Stories;
