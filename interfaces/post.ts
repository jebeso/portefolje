type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  genre: string;
  ogImage: {
    url: string;
  };
  content: string;
  language: string;
};

export default PostType;
