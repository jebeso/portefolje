import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  genre: string;
  language: string;
};

const truncateExcerpt = (excerpt, maxLength) => {
  const lastPeriodIndex = excerpt.lastIndexOf(".", maxLength);
  const lastQuestionIndex = excerpt.lastIndexOf("?", maxLength);
  const lastExclamationIndex = excerpt.lastIndexOf("!", maxLength);
  const lastPunctuationIndex = Math.max(
    lastPeriodIndex,
    lastQuestionIndex,
    lastExclamationIndex
  );

  if (lastPunctuationIndex !== -1) {
    return excerpt.substring(0, lastPunctuationIndex) + ".";
  } else {
    return excerpt.substring(0, maxLength) + "...";
  }
};

const PostPreview = ({ title, date, excerpt, genre }: Props) => {
  const maxExcerptLength = 500;

  if (excerpt.length > maxExcerptLength) {
    excerpt = truncateExcerpt(excerpt, maxExcerptLength);
  }

  return (
    <div className="dark:hover:bg-darkHover hover:bg-violet-50 p-6 rounded-3xl shadow-sm hover:shadow-lg dark:hover:shadow-darkHover hover:shadow-violet-200 dark:border-lessDarkHover dark:hover:border-violet-900 border-gray transition duration-200 ease-in-out hover:border-violet-300 border hover:border transform">
      <h2 className="text-3xl leading-snug pb-1 transition duration-100">
        {title}
      </h2>
      <div className="text-lg dark:text-violet-300 text-violet-700">
        <DateFormatter dateString={date} genre={genre} />
      </div>
      <p className="text-lg">{excerpt}..</p>
      <div>
        <span className="whitespace-nowrap dark:text-violet-300 text-violet-600">
          Read more...
        </span>
      </div>
    </div>
  );
};

export default PostPreview;
