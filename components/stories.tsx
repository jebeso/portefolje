import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { useState } from "react";
import BottomBar from "./bottombar";
import Link from "next/link";
import ThemeChanger from "./theme-changer";

export type Props = {
  posts: Post[];
};

export enum Genre {
  IT = "IT",
  Prose = "Prose",
  Fiction = "Fiction",
}

export enum Language {
  ENG = "ENG",
  NOR = "NOR",
}

const Stories = ({ posts }: Props) => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null
  );

  const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts
    .filter((post) =>
      selectedLanguage ? post.language === selectedLanguage : true
    )
    .filter((post) => (!selectedGenre ? true : post.genre === selectedGenre))
    .filter((post) =>
      !searchTerm
        ? true
        : post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const buttonStyling =
    "mr-1 mb-1 border border-violet-400 rounded-full px-3 py-1 outline-none";
  const searchStyling =
    buttonStyling +
    "mr-0 w-44 outline-none dark:bg-gray-900 dark:border-violet-800 dark:placeholder-gray-400";
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7x tracking-tighter leading-tight"></h2>
      <div className="mb-8 text-center md:text-left flex flex-col">
        <div>
          <button
            className={`${buttonStyling} ${
              selectedGenre === null
                ? "dark:bg-violet-900 bg-violet-200 transition duration-500 ease-in-out border-violet-700"
                : "transition duration-500 ease-in-out dark:border-violet-800"
            }`}
            onClick={() => setSelectedGenre(null)}
          >
            All
          </button>
          {Object.values(Genre).map((genre?) => (
            <button
              key={genre}
              className={`${buttonStyling} ${
                selectedGenre === genre
                  ? "dark:bg-violet-900 bg-violet-200 transition duration-500 ease-in-out dark:border-violet-700 border-violet-600"
                  : "transition duration-500 ease-in-out dark:border-violet-800"
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
          <button
            className={`${buttonStyling} w-44 md:w-40 ${
              selectedLanguage === Language.ENG
                ? "dark:bg-violet-900 bg-violet-200 transition duration-500 ease-in-out border-violet-700"
                : "transition duration-500 ease-in-out dark:border-violet-800"
            }`}
            onClick={() =>
              setSelectedLanguage(
                selectedLanguage === Language.ENG ? null : Language.ENG
              )
            }
          >
            {selectedLanguage === Language.ENG
              ? "I'm chuffed to bits!"
              : "Shit, it's på Norsk!"}
          </button>
        </div>
        <div></div>
        <div>
          <input
            className={searchStyling}
            type="text"
            value={searchTerm}
            onChange={handleSearchTerm}
            placeholder="Filter..."
          />
        </div>
        <div className="text-gray-400">
          {filteredPosts.length > 0 &&
            `Displaying ${
              filteredPosts.length <= 9
                ? [
                    "one",
                    "two",
                    "three",
                    "four",
                    "five",
                    "six",
                    "seven",
                    "eight",
                    "nine",
                  ][filteredPosts.length - 1]
                : filteredPosts.length
            } ${selectedLanguage === Language.ENG ? "English " : ""}post${
              filteredPosts.length !== 1 ? "s" : ""
            }`}

          {filteredPosts.length === 0 &&
            `${
              selectedLanguage === Language.ENG ? "No English " : "No "
            }posts remain 🥲`}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-4 md:gap-y-6 lg:gap-y-10 lg:grid-cols-2 gap-x-10 xl:gap-x-10 md:px-12 pt-10">
        {filteredPosts.map(
          ({ title, coverImage, date, slug, excerpt, genre, language }) => (
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <div className="h-full flex">
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
      </div>

      <BottomBar filteredPosts={filteredPosts.length} />
    </section>
  );
};

export default Stories;
