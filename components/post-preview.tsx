import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  genre: string;
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
    <div className="hover:bg-violet-50 p-6 rounded-3xl shadow-sm hover:shadow-lg hover:shadow-violet-200 border-violet-300 transition duration-200 ease-in-out hover:border-violet-500 transform hover:-translate-y-1">
      <h2 className="text-3xl leading-snug pb-1 hover:text-violet-700 transition duration-200">
        {title}
      </h2>
      <div className="text-lg text-violet-700">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg">{excerpt}..</p>
      <div>
        <span className="whitespace-nowrap text-violet-600 lg:hidden">
          Read more...
        </span>
      </div>
    </div>
  );
};

export default PostPreview;
