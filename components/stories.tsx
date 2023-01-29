import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { useState } from "react";

type Props = {
  posts: Post[];
};

export enum Genre {
  Programming = "IT",
  Prose = "Prose",
  Fiction = "Fiction",
}

const Stories = ({ posts }: Props) => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  //TODO: delete?
  // const handleGenreFilter = (genre: Genre) => {
  //   setSelectedGenre(genre);
  // };

  const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts =
    selectedGenre && !searchTerm
      ? posts.filter((post) => post.genre === selectedGenre)
      : !selectedGenre && searchTerm
      ? posts.filter(
          (post) =>
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : selectedGenre && searchTerm
      ? posts.filter(
          (post) =>
            post.genre === selectedGenre &&
            (post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
              post.title.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      : posts;

  const buttonStyling =
    "mr-1 mb-1 border border-violet-400 rounded-full px-3 py-1 outline-none";
  const searchStyling = buttonStyling + " mr-0";

  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7x tracking-tighter leading-tight"></h2>
      <div className="mb-8 text-center sm:text-left">
        <input
          className={searchStyling}
          type="text"
          value={searchTerm}
          onChange={handleSearchTerm}
          placeholder="Type to filter articles"
        />{" "}
        <button
          className={`${buttonStyling} ${
            selectedGenre === null ? "bg-violet-100 text-black" : ""
          }`}
          onClick={() => setSelectedGenre(null)}
        >All subjects
        </button>
        {Object.values(Genre).map((genre?) => (
          <button
            key={genre}
            className={`${buttonStyling} ${
              selectedGenre === genre ? "bg-violet-100 text-black" : ""
            }`}
            onClick={() => {
              if (selectedGenre === genre) {
                setSelectedGenre(null);
              } else {
                setSelectedGenre(genre);
              }
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <div className="mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-20 gap-y-20 md:gap-y-16 mb-20">
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
            <p className="text-2xl">No results 😢</p>
        )}
      </div>
    </section>
  );
};

export default Stories;
