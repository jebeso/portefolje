// hooks/useFilteredPosts.ts
import { useState, useEffect } from "react";
import type Post from "../interfaces/post";
import { Genre, Language } from "../components/stories";

export const useFilteredPosts = (
  posts: Post[],
  selectedLanguage: Language | null,
  selectedGenre: Genre | null,
  searchTerm: string
): Post[] => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const filtered = posts
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

    setFilteredPosts(filtered);
  }, [selectedLanguage, selectedGenre, searchTerm, posts]);

  return filteredPosts;
};
