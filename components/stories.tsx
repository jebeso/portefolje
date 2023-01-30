import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { useState } from "react";
import BottomBar from "./bottombar";
import BiCode from "react-icons"

export type Props = {
  posts: Post[];
};

export enum Genre {
  Code = "Code",
  Prose = "Prose",
  Fiction = "Fiction",
}

const Stories = ({ posts }: Props) => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
setSelectedGenre
  const handleGenreFilter = (genre: Genre) => {
    (genre);
  };

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
  const searchStyling = buttonStyling + " mr-0 w-40";

  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7x tracking-tighter leading-tight"></h2>
      <div className="mb-8 text-center sm:text-left">
        <input
          className={searchStyling}
          type="text"
          value={searchTerm}
          onChange={handleSearchTerm}
          placeholder="Type to filter"
        />{" "}
        <button
          className={`${buttonStyling} ${
            selectedGenre === null ? "bg-violet-100" : ""
          }`}
          onClick={() => setSelectedGenre(null)}
        >
          <div className="text-violet-900">💜 Any subject</div>
        </button>
        {Object.values(Genre).map((genre?) => (
          <button
            key={genre}
            className={`${buttonStyling} ${
              selectedGenre === genre ? "bg-violet-100 text-violet-900" : ""
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
          <div className="text-3xl pt-1 text-violet-800">
            No results for that selection...
          </div>
        )}
      </div>
      <BottomBar filteredPosts={filteredPosts.length}></BottomBar>
    </section>
  );
};

export default Stories;
