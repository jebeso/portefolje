import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { useState } from "react";

type Props = {
  posts: Post[];
};

export enum Genre {
  Psychology = "Psychology",
  Linux = "Linux",
  Programming = "Programming",
}

const Stories = ({ posts }: Props) => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const handleGenreFilter = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  const filteredPosts = selectedGenre
    ? posts.filter((post) => post.genre === selectedGenre)
    : posts;

  const buttonStyling =
    "mr-1 mb-1 border border-violet-400 rounded-full px-3 py-1";

  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7x tracking-tighter leading-tight"></h2>
      <div className="mb-8 text-center sm:text-left">
        <button
          className={`${buttonStyling} ${
            selectedGenre === null ? "bg-violet-800 text-white" : ""
          }`}
          onClick={() => setSelectedGenre(null)}
        >
          All!
        </button>
        {Object.values(Genre).map((genre?) => (
          <button
            key={genre}
            className={`${buttonStyling} ${
              selectedGenre === genre ? "bg-violet-800 text-white" : ""
            }`}
            onClick={() => handleGenreFilter(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {filteredPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            genre={post.genre}
          />
        ))}
        {filteredPosts.length === 0 && (
          <div className="text-center">
            <p className="text-lg">No posts found 😢</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Stories;
