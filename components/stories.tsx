import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { useState } from "react";
import BottomBar from "./bottombar";
import Link from "next/link";
import GenreFilter from "./GenreFilter";
import LanguageFilter from "./LanguageFilter";
import SearchFilter from "./SearchFilter";
import { useFilteredPosts } from "../hooks/useFilteredPosts";

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

  const filteredPosts = useFilteredPosts(
    posts,
    selectedLanguage,
    selectedGenre,
    searchTerm
  );

  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7x tracking-tighter leading-tight"></h2>
      <div className="mb-8 text-center md:text-left flex flex-col">
        <div>
          <GenreFilter
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
          <div className="md:flex">
            <LanguageFilter
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
            <SearchFilter
              searchTerm={searchTerm}
              handleSearchTerm={handleSearchTerm}
            />
          </div>
        </div>
        <div className="text-gray-400 pl-1">
          {filteredPosts.length > 0 && (
            <>
              Showing{" "}
              <span className="font-bold dark:text-violet-300 text-violet-700">
                {" "}
                {filteredPosts.length <= 9
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
                  : filteredPosts.length}{" "}
                {selectedLanguage || !selectedGenre
                  ? null
                  : selectedGenre === "IT"
                  ? "IT"
                  : selectedGenre.toLowerCase()}
              </span>{" "}
              {selectedLanguage === Language.ENG && (
                <span className="font-bold dark:text-violet-300 text-violet-700">
                  English{" "}
                  {selectedGenre &&
                    `${
                      selectedGenre.toLowerCase() === "it"
                        ? "IT"
                        : selectedGenre.toLowerCase()
                    } `}
                </span>
              )}
              post{filteredPosts.length !== 1 ? "s" : ""}
              {!selectedGenre && !selectedLanguage && " in any genre"}
            </>
          )}
          {filteredPosts.length === 0 && (
            <>
              {selectedLanguage === Language.ENG ? (
                <>
                  <span>No </span>
                  <span className="font-bold dark:text-violet-300 text-violet-700">
                    English{" "}
                  </span>
                </>
              ) : (
                "No "
              )}
              posts to show 🥲
            </>
          )}
        </div>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-y-4 md:gap-y-6 lg:gap-y-10 pt-10">
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
      </div>
      <BottomBar filteredPosts={filteredPosts.length} />
    </section>
  );
};

export default Stories;
