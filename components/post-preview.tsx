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

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  const maxExcerptLength = 500;

  if (excerpt.length > maxExcerptLength) {
    const lastPeriodIndex = excerpt.lastIndexOf(".", maxExcerptLength);
    const lastQuestionIndex = excerpt.lastIndexOf("?", maxExcerptLength);
    const lastExclamationIndex = excerpt.lastIndexOf("!", maxExcerptLength);
    const lastPunctuationIndex = Math.max(
      lastPeriodIndex,
      lastQuestionIndex,
      lastExclamationIndex
    );

    if (lastPunctuationIndex !== -1) {
      excerpt = excerpt.substring(0, lastPunctuationIndex) + ".";
    } else {
      excerpt = excerpt.substring(0, maxExcerptLength) + "...";
    }
  }

  return (
    <div className="dark:hover:bg-darkHover hover:bg-violet-50 p-6 rounded-3xl shadow-sm hover:shadow-lg dark:hover:shadow-darkHover hover:shadow-violet-200 dark:border-lessDarkHover border-gray transition duration-200 ease-in-out hover:border-violet-300 border hover:border transform hover:-translate-y-1">
      <h2 className="text-3xl leading-snug pb-1 dark:hover:text-violet-300 hover:text-violet-700 transition duration-100">
        {title}
      </h2>
      <div className="text-lg dark:text-violet-300 text-violet-700">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg">{excerpt}..</p>
      <div>
        <span className="whitespace-nowrap dark:text-violet-300 text-violet-600 lg:hidden">
          Read more...
        </span>
      </div>
    </div>
  );
};

export default PostPreview;
