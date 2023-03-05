import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { useState } from "react";
import BottomBar from "./bottombar";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export type Props = {
  posts: Post[];
};

export enum Genre {
  IT = "IT",
  Prose = "Prose",
  Fiction = "Fiction",
}

const Stories = ({ posts }: Props) => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

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
  const searchStyling = buttonStyling + "mr-0 w-44 outline-none";
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7x tracking-tighter leading-tight"></h2>
      <div className="mb-8 text-center sm:text-left flex flex-col">
        <div>
          <button
            className={`${buttonStyling} ${
              selectedGenre === null ? "bg-violet-200" : ""
            }`}
            onClick={() => setSelectedGenre(null)}
          >
            All
          </button>
          {Object.values(Genre).map((genre?) => (
            <button
              key={genre}
              className={`${buttonStyling} ${
                selectedGenre === genre ? "bg-violet-200" : ""
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
        <div>
          <input
            className={searchStyling}
            type="text"
            value={searchTerm}
            onChange={handleSearchTerm}
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="mb-14"></div>
      <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-30 gap-y-20 md:gap-y-16 xl:gap-x-56">
        {filteredPosts.map((post) => (
          <CSSTransition key={post.slug} classNames="post" timeout={100}>
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
              genre={post.genre}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>

      <BottomBar filteredPosts={filteredPosts.length}></BottomBar>
    </section>
  );
};

export default Stories;
